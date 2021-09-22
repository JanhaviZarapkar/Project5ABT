package com.example2.webapp3;
import java.util.*;
import java.text.DecimalFormat;

public class Amortization{

    private double amount;
	private int months;
	private double rate;
	
	public static double calcEMI(double a, int m, double r) {
		double term = Math.pow((1+r), m);
		double emi = (a * r * term) / (term - 1);
		return emi;
	}
	
	public static double[][] createSchedule(double a, int m, double r) {
		double[][] res = new double[m][7];
		double emi = calcEMI(a, m, r);
		//constant values
		for(int i=0; i<res.length; i++) {
			res[i][0] = 0;		//loan account ID
			res[i][1] = i+1;	//month number
			res[i][2] = emi;	//emi
			res[i][6] = 0;		//0-Pending, 1-Paid, 2-Cancelled
		}
		
		//variable values
		res[0][4] = a * r;				//interest component
		res[0][3] = emi - res[0][4];	//principal component
		res[0][5] = a - res[0][3];		//outstanding in loan amount
		for(int i=1; i<res.length; i++) {
			res[i][4] = res[i-1][5] * r;			//interest component
			res[i][3] = emi - res[i][4];			//principal component
			res[i][5] = res[i-1][5] - res[i][3];	//outstanding
		}
		return res;
	}
	
	public void runner(double amount,int months,double rate) {
        this.amount=amount;
        this.months = months;
        this.rate = rate;
		double m_rate = rate/12/100;		//monthly rate
		double[][] arr = new double[months][7];
		arr = createSchedule(amount, months, m_rate);
		
		System.out.println("ID"+"\t"+"Month"+"\t"+"EMI"+"\t"+"Principal"+"\t"+"Interest"+"\t"+"Outstanding"+"\t"+"Status");
	    for (int i=0; i<arr.length; i++) {
	      for (int j=0; j<arr[i].length; j++) {
	        System.out.printf("%.2f", arr[i][j]);
	        System.out.print("\t");
	      }
	      System.out.println();
	    }
	}
}