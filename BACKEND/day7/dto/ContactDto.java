package com.example.agribackend.agri.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ContactDto {
    private String name;

    private String emailid;

    private String message;
    
}
