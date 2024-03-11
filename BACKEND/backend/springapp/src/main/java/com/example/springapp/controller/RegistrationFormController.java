package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.service.RegistrationFormService;

import java.util.List;

@RestController

@RequestMapping("/registration-forms")
@CrossOrigin("*")
// @CrossOrigin(origins="http://localhost:5173")
public class RegistrationFormController {
    private final RegistrationFormService registrationFormService;
    public RegistrationFormController(RegistrationFormService registrationFormService) {
        this.registrationFormService = registrationFormService;
    }
    @PostMapping("/submit")
    public ResponseEntity<RegistrationFormEntity> saveRegistrationForm(@RequestBody RegistrationFormEntity registrationFormEntity) {
        RegistrationFormEntity savedEntity = registrationFormService.saveRegistrationForm(registrationFormEntity);
        return ResponseEntity.ok(savedEntity);
    }
    @GetMapping("/all")
    public ResponseEntity<List<RegistrationFormEntity>> getAllRegistrationForms() {
        List<RegistrationFormEntity> registrationForms = registrationFormService.getAllRegistrationForms();
        return ResponseEntity.ok(registrationForms);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<RegistrationFormEntity> updateRegistrationFormById(
            @PathVariable Long id,
            @RequestBody RegistrationFormEntity updatedEntity
    ) {
        RegistrationFormEntity updatedRegistrationForm = registrationFormService.updateRegistrationFormById(id, updatedEntity);
        if (updatedRegistrationForm != null) {
            return ResponseEntity.ok(updatedRegistrationForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteRegistrationFormById(@PathVariable Long id) {
        registrationFormService.deleteRegistrationFormById(id);
        return ResponseEntity.noContent().build();
    }

    // Add other controller methods as needed
}