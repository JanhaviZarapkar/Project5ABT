package com.example2.webapp3;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<LoanAccount,Integer>{
    
}
