package com.cloudshare.cloudshareapi.repository;

import com.cloudshare.cloudshareapi.entity.ProfileDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProfileRepo extends MongoRepository<ProfileDocument , String> {
     Optional<ProfileDocument> findByEmail(String email);
     ProfileDocument findByClerkId(String clerkId);
     Boolean existsByClerkId(String clerkId);
}
