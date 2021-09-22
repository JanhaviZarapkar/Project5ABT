package com.example2.webapp3;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SavingController {

    @Autowired
    private SavingRepository repo;
    

    /*
    @PostMapping("/add")
    public boolean addAccount(@RequestBody SavingAccount lr){
    try{
    repo.save(lr);
    return true;
    }catch(Exception ex){
    System.out.println(ex);
    return false;
    }
    } */

    @GetMapping("/saving/{id}")
    public Optional getId(@PathVariable("id") Integer id){
    return repo.findById(id);  
    }

    @GetMapping("/allsaving")
    public List<SavingAccount> display(){
    return repo.findAll();  
    }
    

    @PostMapping("/deletesaving/{id}")
    public void deleteAccount(@PathVariable("id") Integer id){
    repo.deleteById(id);
}

    
   

}