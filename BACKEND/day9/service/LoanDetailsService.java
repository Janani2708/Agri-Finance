package com.example.agribackend.agri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agribackend.agri.Model.LoanDetails;
import com.example.agribackend.agri.Repository.LoanDetailsRepo;
import com.example.agribackend.agri.dto.LoanDetailsDto;
@Service
public class LoanDetailsService {
     private final LoanDetailsRepo loanDetailsRepo;

    @Autowired
    public LoanDetailsService(LoanDetailsRepo loanDetailsRepo) {
        this.loanDetailsRepo = loanDetailsRepo;
    }

    public List<LoanDetails> getAllLoanDetails() {
        return loanDetailsRepo.findAll();
    }

    public LoanDetails getLoanDetailsById(Long id) {
        Optional<LoanDetails> optionalLoanDetails = loanDetailsRepo.findById(id);
        return optionalLoanDetails.orElse(null);
    }

    public LoanDetails createLoanDetails(LoanDetailsDto loanDetailsDto) {
        LoanDetails loanDetails = new LoanDetails();
        BeanUtils.copyProperties(loanDetailsDto, loanDetails);
        return loanDetailsRepo.save(loanDetails);
    }

    public LoanDetails updateLoanDetails(Long id, LoanDetailsDto loanDetailsDto) {
        Optional<LoanDetails> optionalLoanDetails = loanDetailsRepo.findById(id);
        if (optionalLoanDetails.isPresent()) {
            LoanDetails loanDetails = optionalLoanDetails.get();
            BeanUtils.copyProperties(loanDetailsDto, loanDetails);
            return loanDetailsRepo.save(loanDetails);
        }
        return null;
    }

    public void deleteLoanDetails(Long id) {
        loanDetailsRepo.deleteById(id);
    }
}
