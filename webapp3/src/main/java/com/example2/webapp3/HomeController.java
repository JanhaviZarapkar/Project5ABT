package com.example2.webapp3;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class HomeController {
	@Autowired
	private UserRepository userrepository;
	
    
	@GetMapping("/home")
    public String home(@RequestParam("username") String username, @RequestParam("password") String password){
    	
    	User obj = userrepository.findByUsername(username);
    	if (obj==null) throw new UserNotFoundException("User Not Found");
    	if(obj.getPassword().equals(password)) {
        return obj.getId() + " " + obj.getSavings_account_id();
    	}
    	else {
    		throw new UserNotFoundException("Password Wrong");
    	}
    	
    	
    }
}