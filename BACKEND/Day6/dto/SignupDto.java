// package com.example.agribackend.dto;

// public class SignupDto {
    
// }

package com.example.agribackend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class SignupDto {

   
    private Long id;

    private String username;

    private String email;
    
    private String password;

    private String phonenumber;


    
}


