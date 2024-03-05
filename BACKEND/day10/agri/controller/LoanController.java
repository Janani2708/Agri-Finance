package com.example.agribackend.agri.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agribackend.agri.Model.LoanDetails;
import com.example.agribackend.agri.dto.LoanDetailsDto;
import com.example.agribackend.agri.service.LoanDetailsService;
@RestController
@RequestMapping("/api/loans")
public class LoanController {
    
    private final LoanDetailsService loanDetailsService;

    @Autowired
    public LoanController(LoanDetailsService loanDetailsService) {
        this.loanDetailsService = loanDetailsService;
    }

    @GetMapping
    public ResponseEntity<List<LoanDetails>> getAllLoanDetails() {
        List<LoanDetails> loanDetails = loanDetailsService.getAllLoanDetails();
        return new ResponseEntity<>(loanDetails, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanDetails> getLoanDetailsById(@PathVariable("id") Long id) {
        LoanDetails loanDetails = loanDetailsService.getLoanDetailsById(id);
        return new ResponseEntity<>(loanDetails, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<LoanDetails> createLoanDetails(@RequestBody LoanDetailsDto loanDetailsDto) {
        LoanDetails newLoanDetails = loanDetailsService.createLoanDetails(loanDetailsDto);
        return new ResponseEntity<>(newLoanDetails, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LoanDetails> updateLoanDetails(@PathVariable("id") Long id, @RequestBody LoanDetailsDto loanDetailsDto) {
        LoanDetails updatedLoanDetails = loanDetailsService.updateLoanDetails(id, loanDetailsDto);
        return new ResponseEntity<>(updatedLoanDetails, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoanDetails(@PathVariable("id") Long id) {
        loanDetailsService.deleteLoanDetails(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
