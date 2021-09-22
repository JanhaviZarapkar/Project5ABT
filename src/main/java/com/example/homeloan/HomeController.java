package com.example.homeloan;

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
    public long home(@RequestParam(required=true) String username, @RequestParam(required=true) String password){
    	
    	User obj = userrepository.findByUsername(username);
    	if (obj==null) throw new UserNotFoundException("User Not Found");
    	if(obj.getPassword().equals(password)) {
        return obj.getId();
    	}
    	else {
    		throw new UserNotFoundException("Password Wrong");
    	}
    	
    	
    }

    @GetMapping("/admin")
    public String admin(){
        return "This is Admin Page";
    }
}
