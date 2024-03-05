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

public class LoanDetailsDto {

    private int fundid;

    private String amount;

    private String duration;

    private String content;

    
}

