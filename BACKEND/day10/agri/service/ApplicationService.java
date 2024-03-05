package com.example.agribackend.agri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agribackend.agri.Model.Application;
import com.example.agribackend.agri.Repository.ApplicationRepo;
import com.example.agribackend.agri.dto.ApplicationDto;
@Service
public class ApplicationService {
     private final ApplicationRepo applicationRepo;

    @Autowired
    public ApplicationService(ApplicationRepo applicationRepo) {
        this.applicationRepo = applicationRepo;
    }

    public List<Application> getAllApplications() {
        return applicationRepo.findAll();
    }

    public Application getApplicationById(Long id) {
        Optional<Application> optionalApplication = applicationRepo.findById(id);
        return optionalApplication.orElse(null);
    }

    public Application createApplication(ApplicationDto applicationDto) {
        Application application = new Application();
        BeanUtils.copyProperties(applicationDto, application);
        return applicationRepo.save(application);
    }

    public Application updateApplication(Long id, ApplicationDto applicationDto) {
        Optional<Application> optionalApplication = applicationRepo.findById(id);
        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();
            BeanUtils.copyProperties(applicationDto, application);
            return applicationRepo.save(application);
        }
        return null;
    }

    public void deleteApplication(Long id) {
        applicationRepo.deleteById(id);
    }
    
}
