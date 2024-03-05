package com.example.agribackend.agri.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agribackend.agri.Model.Contact;

public interface ContactRepo extends JpaRepository<Contact, Long> {

}
