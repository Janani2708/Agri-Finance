package com.example.agribackend.agri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.agribackend.agri.Model.Userinfo;
import com.example.agribackend.agri.Repository.UserRepo;
import com.example.agribackend.agri.dto.UserDto;

import lombok.NonNull;
@Service
public class UserService {
    // UserDto createEmployee(UserDto employeeDto);

    // UserDto getEmployeeById(Long employeeId);

    // List<UserDto> getAllEmployees();
     private final UserRepo userRepo;

     @Autowired
       private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<Userinfo> getAllUsers() {
        return userRepo.findAll();
    }

    public Userinfo getUserById(Long id) {
        Optional<Userinfo> optionalUser = userRepo.findById(id);
        return optionalUser.orElse(null);
    }

    public Userinfo createUser(UserDto userDto) {
        Userinfo user = new Userinfo();
        BeanUtils.copyProperties(userDto, user);

        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        return userRepo.save(user);
    }

    public Userinfo updateUser(Long id, UserDto userDto) {
        Optional<Userinfo> optionalUser = userRepo.findById(id);
        if (optionalUser.isPresent()) {
            Userinfo user = optionalUser.get();
            BeanUtils.copyProperties(userDto, user);
            return userRepo.save(user);
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
}
