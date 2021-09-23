package com.example2.webapp3;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

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
        sendEmail(lr.getEmail(),lr.getTotal_loan_amount(),lr.getCustomer_id());
    return lr.getLoan_account_id();
    }catch(Exception ex){
    System.out.println(ex);
    return -1;
    }
    }
    @Autowired
    private JavaMailSender javaMailSender;

    private void sendEmail(String email,int loan_amount,int cust_id) throws MessagingException, UnsupportedEncodingException {

        SimpleMailMessage msg = new SimpleMailMessage();//old
        LoanAccount loan = new LoanAccount();
        msg.setTo(email);
        String toAddress = email;
        String loan_mt=String.valueOf(loan_amount);
        String fromAddress = "project5Abarclays@gmail.com";
        String senderName = "5A bank";
        String subject = "Congratualations!!! Your Loan Account is Created";
        String content = "Dear customer<br>"+"Your customer ID alloted is "+cust_id
                + " your loan account is created and the loan amount is :"+loan_mt;
        String content1= "<br>Thank you,<br>"
        + "Project 5A.";
        String content_all=content+content1;
        System.out.println("@printing"+loan_mt);
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        helper.setText(content_all, true);

        javaMailSender.send(message);
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
