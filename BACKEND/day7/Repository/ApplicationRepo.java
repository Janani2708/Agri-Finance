package com.example.agribackend.agri.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agribackend.agri.Model.Application;

public interface ApplicationRepo extends JpaRepository<Application, Long> {

}
