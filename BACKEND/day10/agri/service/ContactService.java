package com.example.agribackend.agri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agribackend.agri.Model.Contact;
import com.example.agribackend.agri.Repository.ContactRepo;
import com.example.agribackend.agri.dto.ContactDto;
@Service
public class ContactService {
    
    private final ContactRepo contactRepo;

    @Autowired
    public ContactService(ContactRepo contactRepo) {
        this.contactRepo = contactRepo;
    }

    public List<Contact> getAllContacts() {
        return contactRepo.findAll();
    }

    public Contact getContactById(Long id) {
        Optional<Contact> optionalContact = contactRepo.findById(id);
        return optionalContact.orElse(null);
    }

    public Contact createContact(ContactDto contactDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactDto, contact);
        return contactRepo.save(contact);
    }

    public Contact updateContact(Long id, ContactDto contactDto) {
        Optional<Contact> optionalContact = contactRepo.findById(id);
        if (optionalContact.isPresent()) {
            Contact contact = optionalContact.get();
            BeanUtils.copyProperties(contactDto, contact);
            return contactRepo.save(contact);
        }
        return null; // or throw an exception
    }

    public void deleteContact(Long id) {
        contactRepo.deleteById(id);
    }
    
}
