package com.example.homeloan;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LRSRepository extends JpaRepository<LoanRepaymentSchedule, Integer> {

}
