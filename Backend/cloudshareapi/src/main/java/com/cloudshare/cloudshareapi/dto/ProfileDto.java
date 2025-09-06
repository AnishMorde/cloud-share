package com.cloudshare.cloudshareapi.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;


import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProfileDto {
    @Id
    private String id;
    private String clerkId;
    private String email;
    private String firstName;
    private String lastName;
    private Integer credits;
    private String photoUrl;
    @CreatedDate
    private Instant createdAt;
}
