package com.example2.webapp3;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @Autowired
    private LoanRepository repo;
    

    @PostMapping("/add")
    public boolean addAccount(@RequestBody LoanAccount lr){
    try{
    repo.save(lr);
    Amortization am = new Amortization();
    am.runner(lr.getTotal_loan_amount(),lr.getTenure(),lr.getRate());
    return true;
    }catch(Exception ex){
    System.out.println(ex);
    return false;
    }
    }

    @GetMapping("/allaccounts")
    public List<LoanAccount> display(){
    return repo.findAll();  
    }
    

    @PostMapping("/delete/{id}")
    public void deleteAccount(@PathVariable("id") Integer id){
    repo.deleteById(id);
}

    
   

}
