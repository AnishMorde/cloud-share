package com.cloudshare.cloudshareapi.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.net.URL;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Component
public class ClerkJwksProvider {

    @Value("${clerk.jwks.url}")
    private String jwksUr;

    private final Map<String  , PublicKey> keyCache = new HashMap<>();
    private long lastFetched = 0;
    private static final long CACHE_TTL = 3600_000;

    public PublicKey getPublicKey(String keyId) throws Exception {
        if(keyCache.containsKey(keyId) && System.currentTimeMillis() - lastFetched < CACHE_TTL){
            return keyCache.get(keyId);
        }

        refreshKey();
        return keyCache.get(keyId);


    }

    private void refreshKey() throws Exception{
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jwks = mapper.readTree(new URL(jwksUr));

        JsonNode keys =  jwks.get("keys");

        for (JsonNode keyNode : keys) {
          String kid = keyNode.get("kid").asText();
            String kty = keyNode.get("kty").asText();
            String alg = keyNode.get("alg").asText();

            if("RSA".equals(kty) && "RS256".equals(alg)){
                String n = keyNode.get("n").asText();
                String e = keyNode.get("e").asText();

                PublicKey publicKey = createPublicKey(n , e);
                keyCache.put(kid , publicKey);
            }

        }

        lastFetched = System.currentTimeMillis();
    }

    private PublicKey createPublicKey(String modulus, String exponent) throws Exception {
      byte[] modulusBytes =  Base64.getUrlDecoder().decode(modulus);
        byte[] exponentBytes =  Base64.getUrlDecoder().decode(exponent);

      BigInteger modulusBigInt =  new BigInteger(1 , modulusBytes);
      BigInteger exponentBigInt = new BigInteger(1 ,exponentBytes);

        RSAPublicKeySpec spec = new RSAPublicKeySpec(modulusBigInt , exponentBigInt);
        KeyFactory factory = KeyFactory.getInstance("RSA" );
        return factory.generatePublic(spec);

    }
}
