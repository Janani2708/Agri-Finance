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

import com.example.agribackend.agri.Model.Application;
import com.example.agribackend.agri.dto.ApplicationDto;
import com.example.agribackend.agri.service.ApplicationService;
@RestController
@RequestMapping("/api/application")
public class ApplicationController {
     private final ApplicationService applicationService;

    @Autowired
    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @GetMapping
    public ResponseEntity<List<Application>> getAllApplications() {
        List<Application> applications = applicationService.getAllApplications();
        return new ResponseEntity<>(applications, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable("id") Long id) {
        Application application = applicationService.getApplicationById(id);
        return new ResponseEntity<>(application, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Application> createApplication(@RequestBody ApplicationDto applicationDto) {
        Application newApplication = applicationService.createApplication(applicationDto);
        return new ResponseEntity<>(newApplication, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable("id") Long id, @RequestBody ApplicationDto applicationDto) {
        Application updatedApplication = applicationService.updateApplication(id, applicationDto);
        return new ResponseEntity<>(updatedApplication, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable("id") Long id) {
        applicationService.deleteApplication(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
