package com.example2.webapp3;

import java.util.List;

<<<<<<< HEAD
import javax.transaction.Transactional;

=======
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
<<<<<<< HEAD
=======
import org.springframework.transaction.annotation.Transactional;
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7

public interface LRSRepository extends JpaRepository<LoanRepaymentSchedule, Integer> {
	@Query(value="select * from loanrepaymentschedule l where l.loanid= ?1",nativeQuery= true)
	List<LoanRepaymentSchedule> findByLoanId(int loanid);
<<<<<<< HEAD


	@Transactional
    @Modifying
    @Query("update LoanRepaymentSchedule l set l.paid= :paid where l.paymentid= :paymentid")
    void updateByPaymentId(@Param("paid") String paid, @Param("paymentid") int paymentid);
	
    @Query(value="select * from loanrepaymentschedule l where l.loanid= :loanid and l.paid= :paid",nativeQuery= true)
    List<LoanRepaymentSchedule> findByPaid(@Param("loanid") int loanid, @Param("paid") String paid);
    
=======
	
	@Transactional
	@Modifying
	@Query("update LoanRepaymentSchedule l set l.paid= :paid where l.paymentid= :paymentid")
	void updateByPaymentId(@Param("paid") String paid, @Param("paymentid") int paymentid);
>>>>>>> 03b3a1e4fbdddfade2c598847a084d503030adc7
}
