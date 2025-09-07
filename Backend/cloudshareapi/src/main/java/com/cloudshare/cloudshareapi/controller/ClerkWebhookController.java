package com.cloudshare.cloudshareapi.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/webhooks")
@RequiredArgsConstructor
public class ClerkWebhookController {

    @Value("${clerk.webhook.secret}")
    private String webhookSecret;


    @PostMapping("/clerk")
    public ResponseEntity<?> handleClerkWebhook(@RequestHeader("svix-id") String svixId ,
                                                @RequestHeader("svix-timestamp")String svixTimestamp ,
                                                @RequestHeader("svix-signature") String svixSignature ,
                                                @RequestBody String payload
                                                ){

       return null;
    }


}
