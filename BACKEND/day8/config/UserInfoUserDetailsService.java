package com.example.agribackend.agri.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.agribackend.agri.Model.Userinfo;
import com.example.agribackend.agri.Repository.UserRepo;


@Component
public class UserInfoUserDetailsService implements UserDetailsService {
    @Autowired
    private  UserRepo repository;

    @Override
    public UserDetails loadUserByUsername(String usermail) throws UsernameNotFoundException {
        Optional<Userinfo> loginInfo = repository.findByEmailid(usermail);
        return loginInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + usermail));

    }
}