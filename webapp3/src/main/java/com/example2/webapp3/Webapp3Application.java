
package com.example2.webapp3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Webapp3Application {

	public static void main(String[] args) {
		SpringApplication.run(Webapp3Application.class, args);
		System.out.println("Hello");
	}

}

/*
<!--------------------------------------------->
http://localhost:8080/add -@Post
{
    "loan_account_id":123,
    "customer_id":34,
    "loan_prepayment_eligibility":true,
    "rate":2.0,
    "saving_account_id":11,
    "status":"Ongoining",
    "tenure":2,
    "total_loan_amount":200
}
<!---------------------------------------------->
http://localhost:8080/allaccounts  -@Get
<!----------------------------------------------->
http://localhost:8080/delete/123   -@Post

*/
