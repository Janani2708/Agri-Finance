package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.repository.RegistrationFormRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {

    private final RegistrationFormRepository registrationFormRepository;

    @Autowired
    public RegistrationFormServiceImpl(RegistrationFormRepository registrationFormRepository) {
        this.registrationFormRepository = registrationFormRepository;
    }

    @Override
    public RegistrationFormEntity saveRegistrationForm(RegistrationFormEntity registrationFormEntity) {
        // Add any business logic if needed
        return registrationFormRepository.save(registrationFormEntity);
    }

    @Override
    public List<RegistrationFormEntity> getAllRegistrationForms() {
        return registrationFormRepository.findAll();
    }
    @Override
    public RegistrationFormEntity updateRegistrationFormById(Long id, RegistrationFormEntity updatedEntity) {
        Optional<RegistrationFormEntity> optionalEntity = registrationFormRepository.findById(id);

        if (optionalEntity.isPresent()) {
            RegistrationFormEntity existingEntity = optionalEntity.get();

            // Update the fields with new values
            // existingEntity.setEmail(updatedEntity.getEmail());
            // existingEntity.setPhoneNumber(updatedEntity.getPhoneNumber());
            existingEntity.setEmail(updatedEntity.getEmail());
            existingEntity.setPhoneNumber(updatedEntity.getPhoneNumber());
            existingEntity.setBirthDate(updatedEntity.getBirthDate());
            existingEntity.setBirthDate(updatedEntity.getBirthDate());
            existingEntity.setGender(updatedEntity.getGender());

            existingEntity.setStreetAddress(updatedEntity.getStreetAddress());
            existingEntity.setAadhaarNumber(updatedEntity.getAadhaarNumber());
            existingEntity.setPanNumber(updatedEntity.getPanNumber());
            existingEntity.setApplicantSalary(updatedEntity.getApplicantSalary());
            existingEntity.setLoanAmountRequired(updatedEntity.getLoanAmountRequired());
            // ... (update other fields)

            // Save the updated entity
            return registrationFormRepository.save(existingEntity);
        }

        return null; // Handle the case where the entity with the given ID is not found
    }

    @Override
    public void deleteRegistrationFormById(Long id) {
        registrationFormRepository.deleteById(id);
    }
    // Add other service methods as needed
}