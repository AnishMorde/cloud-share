package com.cloudshare.cloudshareapi.services;


import com.cloudshare.cloudshareapi.dto.ProfileDto;
import com.cloudshare.cloudshareapi.entity.ProfileDocument;
import com.cloudshare.cloudshareapi.repository.ProfileRepo;
import com.mongodb.DuplicateKeyException;
import com.mongodb.MongoWriteException;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepo profileRepo;

    public ProfileDto createProfile(ProfileDto profileDto){

        if(profileRepo.existsByClerkId(profileDto.getClerkId())){
           return updateProfile(profileDto);
        }

       ProfileDocument profile = ProfileDocument.builder()
                .clerkId(profileDto.getClerkId())
                .email(profileDto.getEmail())
                .firstName(profileDto.getFirstName())
                .lastName(profileDto.getLastName())
                .photoUrl(profileDto.getPhotoUrl())
                .credits(5)
                .createdAt(Instant.now())
                .build();

      try{
          profile = profileRepo.save(profile);
      } catch (DuplicateKeyException e ) {
          throw new RuntimeException("Email already exists");
      }


        return profileDto.builder()
              .id(profile.getId())
              .clerkId(profile.getClerkId())
              .email(profile.getEmail())
              .firstName(profile.getFirstName())
              .lastName(profile.getLastName())
              .credits(profile.getCredits())
                .photoUrl(profile.getPhotoUrl())
              .createdAt(profile.getCreatedAt())
              .build();

    }

    public ProfileDto updateProfile(@RequestBody ProfileDto profileDto){
     ProfileDocument profileDocument = profileRepo.findByClerkId(profileDto.getClerkId());

     if(profileDocument != null){
         if( profileDto.getEmail() != null && !profileDto.getEmail().isEmpty()){
             profileDocument.setEmail(profileDto.getEmail());
         }

         if(profileDto.getFirstName() != null && !profileDto.getFirstName().isEmpty()){
             profileDocument.setFirstName(profileDto.getFirstName());
         }

         if(profileDto.getLastName() != null && !profileDto.getLastName().isEmpty()){
             profileDocument.setLastName(profileDto.getLastName());
         }

         if(profileDto.getPhotoUrl() != null && !profileDto.getPhotoUrl().isEmpty()){
             profileDocument.setPhotoUrl(profileDto.getPhotoUrl());
         }

         profileRepo.save(profileDocument);

         return ProfileDto.builder()
                 .id(profileDocument.getId())
                 .clerkId(profileDocument.getClerkId())
                 .email(profileDocument.getEmail())
                 .firstName(profileDocument.getFirstName())
                 .lastName(profileDocument.getLastName())
                 .credits(profileDocument.getCredits())
                 .photoUrl(profileDocument.getPhotoUrl())
                 .createdAt(profileDocument.getCreatedAt())
                 .build();

     }

     return null;

    }

    public Boolean existsByClerkId(String clerkId) {
        return profileRepo.existsByClerkId(clerkId);
    }

    public void deleteProfile(String clerkId){
     ProfileDocument existingProfile =   profileRepo.findByClerkId(clerkId);
       if(existingProfile != null){
           profileRepo.delete(existingProfile);
       }
    }
}
