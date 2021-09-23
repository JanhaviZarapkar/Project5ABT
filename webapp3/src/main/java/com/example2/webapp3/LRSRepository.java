package com.example2.webapp3;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface LRSRepository extends JpaRepository<LoanRepaymentSchedule, Integer> {
	@Query(value="select * from loanrepaymentschedule l where l.loanid= ?1",nativeQuery= true)
	List<LoanRepaymentSchedule> findByLoanId(int loanid);
	
	@Transactional
	@Modifying
	@Query("update LoanRepaymentSchedule l set l.paid= :paid where l.paymentid= :paymentid")
	void updateByPaymentId(@Param("paid") String paid, @Param("paymentid") int paymentid);
}
