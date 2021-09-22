package com.example2.webapp3;

import java.util.ArrayList;
import java.util.List;
import java.text.DecimalFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class LRSControlller {
	@Autowired
	private LRSRepository repo;
	
	@PutMapping("/addloanschedule")
	public List<LoanRepaymentSchedule> addSchedule(@RequestBody LoanParams lp) {
		double amount = lp.getAmount();
		int month = lp.getMonth();
		double rate = lp.getRate();
		double mRate = rate/12/100;		//monthly rate
		double term = Math.pow((1+mRate), month);
		double emi = (amount * mRate * term) / (term - 1);
		DecimalFormat df = new DecimalFormat("#.00");
		emi = Double.parseDouble(df.format(emi));
		List<LoanRepaymentSchedule> plist = new ArrayList<>();
		
		//first month
		LoanRepaymentSchedule obj = new LoanRepaymentSchedule();
		obj.setpaymentid(1);
		obj.setDate("1");
		obj.setEmi(emi);
		obj.setInterest(Double.parseDouble(df.format(amount * mRate)));
		obj.setPrincipal(Double.parseDouble(df.format(emi - obj.getInterest())));
		double prevOut = Double.parseDouble(df.format(amount - obj.getPrincipal()));
		obj.setOutstanding(Double.parseDouble(df.format(prevOut)));
		obj.setPaid("Pending");
		plist.add(obj);
		
		//after the first month
		for(int i=1; i<month; i++) {
			LoanRepaymentSchedule obj1 = new LoanRepaymentSchedule();
			obj1.setpaymentid(i+1);
			obj1.setDate(Integer.toString(i+1));
			obj1.setEmi(emi);
			obj1.setInterest(Double.parseDouble(df.format(prevOut * mRate)));
			obj1.setPrincipal(Double.parseDouble(df.format(emi - obj1.getInterest())));
			obj1.setOutstanding(Double.parseDouble(df.format(prevOut - obj1.getPrincipal())));
			prevOut = obj1.getOutstanding();
			obj1.setPaid("Pending");
			plist.add(obj1);
		}
		
		return repo.saveAll(plist);
	}
	
	@GetMapping("/getloanschedule")
	public List <LoanRepaymentSchedule> getSchedule() {
		return repo.findAll();
	}
}
