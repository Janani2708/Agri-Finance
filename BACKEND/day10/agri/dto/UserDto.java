// package com.example.agribackend.dto;

// public class UserDto {
    
// }
package com.example.agribackend.agri.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserDto {

    private Long id;

    private String emailid;

    private String password;

    private String username;
     
    private String phonenumber;
    
    private String role;

    private Long currentloan;

    
}

