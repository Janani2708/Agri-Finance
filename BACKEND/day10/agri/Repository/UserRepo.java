package com.example.agribackend.agri.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agribackend.agri.Model.Userinfo;

public interface UserRepo extends JpaRepository<Userinfo, Long> {
    Optional<Userinfo> findByEmailid(String emailid);

}
