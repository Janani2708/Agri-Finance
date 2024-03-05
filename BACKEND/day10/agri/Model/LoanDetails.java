package com.example.agribackend.agri.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "LoanDetails")
public class LoanDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

 

    @Column(name = "fundid", nullable = false)
    private int fundid;

    @Column(name = "amount", nullable = false)
    private String amount;

    @Column(name = "duration", nullable = false)
    private String duration;

    @Column(name = "content", nullable = false)
    private String content;


    
}

