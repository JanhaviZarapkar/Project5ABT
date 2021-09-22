package com.example2.webapp3;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="loanaccount")
public class LoanAccount {
    

    @Id
    private int loan_account_id;
    private int total_loan_amount;
    private float rate;
    private int tenure;
    private String status;
    private boolean loan_prepayment_eligibility;
    private int customer_id;
    private int saving_account_id;
    
    public int getLoan_account_id() {
        return loan_account_id;
    }
    public void setLoan_account_id(int loan_account_id) {
        this.loan_account_id = loan_account_id;
    }
    public int getTotal_loan_amount() {
        return total_loan_amount;
    }
    public void setTotal_loan_amount(int total_loan_amount) {
        this.total_loan_amount = total_loan_amount;
    }
    public float getRate() {
        return rate;
    }
    public void setRate(float rate) {
        this.rate = rate;
    }
    public int getTenure() {
        return tenure;
    }
    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public boolean isLoan_prepayment_eligibility() {
        return loan_prepayment_eligibility;
    }
    public void setLoan_prepayment_eligibility(boolean loan_prepayment_eligibility) {
        this.loan_prepayment_eligibility = loan_prepayment_eligibility;
    }
    public int getCustomer_id() {
        return customer_id;
    }
    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }
    public int getSaving_account_id() {
        return saving_account_id;
    }
    public void setSaving_account_id(int saving_account_id) {
        this.saving_account_id = saving_account_id;
    }

    

}
