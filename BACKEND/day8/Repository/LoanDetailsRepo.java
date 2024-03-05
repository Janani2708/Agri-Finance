package com.example.agribackend.agri.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agribackend.agri.Model.LoanDetails;

public interface LoanDetailsRepo extends JpaRepository<LoanDetails, Long> {

}