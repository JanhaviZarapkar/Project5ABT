package com.example.homeloan;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loanrepaymentschedule")
public class LoanRepaymentSchedule {
	@Id
	//@Column(name="paymentid")
	private int paymentid;
	
	//@Column(name="Date")
	private String date;
	
	//@Column(name="EMI")
	private double emi;
	
	//@Column(name="Principal")
	private double principal;

	//@Column(name="Interest")
	private double interest;
	
	//@Column(name="Outstanding")
	private double outstanding;
	
	//@Column(name="Paid")
	private String paid;

	public int getpaymentid() {
		return paymentid;
	}

	public void setpaymentid(int paymentid) {
		this.paymentid = paymentid;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getEmi() {
		return emi;
	}

	public void setEmi(double emi) {
		this.emi = emi;
	}

	public double getPrincipal() {
		return principal;
	}

	public void setPrincipal(double principal) {
		this.principal = principal;
	}

	public double getInterest() {
		return interest;
	}

	public void setInterest(double interest) {
		this.interest = interest;
	}

	public double getOutstanding() {
		return outstanding;
	}

	public void setOutstanding(double outstanding) {
		this.outstanding = outstanding;
	}

	public String getPaid() {
		return paid;
	}

	public void setPaid(String paid) {
		this.paid = paid;
	}

	@Override
	public String toString() {
		return "LoanRepaymentSchedule [paymentid=" + paymentid + ", date=" + date + ", emi=" + emi
				+ ", principal=" + principal + ", interest=" + interest + ", outstanding=" + outstanding + ", paid="
				+ paid + "]";
	}

}
