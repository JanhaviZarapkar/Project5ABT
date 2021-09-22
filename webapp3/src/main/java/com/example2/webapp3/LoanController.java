package com.example2.webapp3;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RestController
public class LoanController {

    @Autowired
    private LoanRepository repo;
    

    @PostMapping("/add")
    public Integer addAccount(@RequestBody LoanAccount lr){
    try{
    repo.save(lr);
    Amortization am = new Amortization();
    am.runner(lr.getTotal_loan_amount(),lr.getTenure(),lr.getRate());
    return lr.getLoan_account_id();
    }catch(Exception ex){
    System.out.println(ex);
    return -1;
    }
    }

    @GetMapping("/allaccounts")
    public List<LoanAccount> display(){
    return repo.findAll();  
    }
    

    @PostMapping("/delete/{id}")
    public boolean deleteAccount(@PathVariable("id") Integer id){
    repo.deleteById(id);
    return true;
}

    @GetMapping("/loan/{id}")
    public Optional getId(@PathVariable("id") Integer id){
    return repo.findById(id);  
    }

    
   

}
