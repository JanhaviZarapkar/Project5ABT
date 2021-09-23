package com.example2.webapp3;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class SavingAccount{
    
    @Id
    private int savings_account_id;
    private String name;
    private String Email;
    private String address;
    private float currentbalance;
    private double salary;
    private String customerID;
    
    public int getSavings_account_id() {
        return savings_account_id;
    }
    public void setSavings_account_id(int savings_account_id) {
        this.savings_account_id = savings_account_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
        Email = email;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public float getCurrentbalance() {
        return currentbalance;
    }
    public void setCurrentbalance(float currentbalance) {
        this.currentbalance = currentbalance;
    }
    public double getSalary() {
        return salary;
    }
    public void setSalary(double salary) {
        this.salary = salary;
    }
    public String getCustomerID() {
        return customerID;
    }
    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }
}
