package com.example2.webapp3;

import java.util.ArrayList;
import java.util.List;
import java.text.DecimalFormat;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD

@CrossOrigin
=======
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7
@RestController
public class LRSControlller {
	@Autowired
	private LRSRepository repo;
	
	@PutMapping("/addloanschedule")
	public List<LoanRepaymentSchedule> addSchedule(@RequestBody LoanParams lp) {
		int loanid = lp.getLoanid();
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
		obj.setLoanid(loanid);
		YearMonth k = YearMonth.now().plusMonths(1);
		obj.setDate(k.format(DateTimeFormatter.ofPattern("MMM yyyy")));
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
			YearMonth k1 = YearMonth.now().plusMonths(i+1);
			obj1.setLoanid(loanid);
			obj1.setDate(k1.format(DateTimeFormatter.ofPattern("MMM yyyy")));
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
	
	@GetMapping("/getloanschedule/loanid")
	public List <LoanRepaymentSchedule> getSchedule(@RequestParam int loanid) {
		return repo.findByLoanId(loanid);
	}
<<<<<<< HEAD


	@PutMapping("updateloanschedule/loanid")
    public LoanRepaymentSchedule updateLoanSchedule(@RequestParam int loanid) {
        List <LoanRepaymentSchedule> temp = repo.findByLoanId(loanid);
        int res = 0;
        for(int i=0; i<temp.size(); i++) {
            if(temp.get(0).getPaid().equals("Pending")) {
                res = temp.get(0).getpaymentid();
                repo.updateByPaymentId("Paid", res);
                return temp.get(0);
            }
            else {
                if(temp.get(i).getPaid().equals("Paid")) {
                    continue;
                }
                else {
                    res = temp.get(i).getpaymentid();
                    repo.updateByPaymentId("Paid", res);
                    return temp.get(i);
                }
            }
        }
        return null;
    }


	@GetMapping("/getPrepaymentstatus/loanid")
    public int getPrepaymentStatus(@RequestParam int loanid) {
        List <LoanRepaymentSchedule> temp = repo.findByPaid(loanid, "Paid");
        int res = -1;                    //not available
        if(temp.size() >= 3) {
            res = 1;                    //available
        }
        return res;
    }
	


=======
	
	@PutMapping("updateloanschedule/loanid")
	public LoanRepaymentSchedule updateLoanSchedule(@RequestParam int loanid) {
		List <LoanRepaymentSchedule> temp = repo.findByLoanId(loanid);
		int res = 0;
		for(int i=0; i<temp.size(); i++) {
			if(temp.get(0).getPaid().equals("Pending")) {
				res = temp.get(0).getpaymentid();
				repo.updateByPaymentId("Paid", res);
				return temp.get(0);
			}
			else {
				if(temp.get(i).getPaid().equals("Paid")) {
					continue;
				}
				else {
					res = temp.get(i).getpaymentid();
					repo.updateByPaymentId("Paid", res);
					return temp.get(i);
				}
			}
		}
		return null;
	}
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7
}
