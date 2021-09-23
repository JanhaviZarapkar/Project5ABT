import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Button from "@mui/material/Button";
import axios from "axios";

const LoanAccount = (props) => {
  const [prepay, setPrepay] = useState(true);
  const [SavAccNo, setSavAccno] = useState("00000");
  const [amount, setAmount] = useState("00000");
  const [rate, setRate] = useState("00000");
  const [tenure, setTenure] = useState("00000");
  const [status, setStatus] = useState("00000");
  const [loanAccNo, setLoanAccNo] = useState("00000");
  var loanaccid = props.match.params.id;
  useEffect(() => {
    axios.get("http://localhost:8080/loan/" + loanaccid).then((res) => {
      var response = res.data;
     // console.log(response);
  //   setPrepay(response.loan_prepayment_eligibility);
     setSavAccno(response.saving_account_id);
     setAmount(response.total_loan_amount);
     setRate(response.rate);
     setStatus(response.state);
     setTenure(response.tenure);
     setStatus(response.status);
     setLoanAccNo(response.loan_account_id);

    });
  });
  return (
    <div>
      <Header />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "10rem",
            },
          }}
          style={{ marginTop: "3%", marginBottom: "1%" }}
        >
          <Paper elevation={3} style={{ padding: "1.5rem", height: "auto" }}>
            <h1>Loan Account Details</h1>
            <br />
            <Grid container spacing={2} style={{ textAlign: "left" }}>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Saving Account Number
                </span>
                :{SavAccNo}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Loan Account Number
                </span>
                :{loanAccNo}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  {" "}
                  Total Loan Amount
                </span>
                :{amount}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Interest Rate
                </span>
                :{rate}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Status
                </span>
                :{status}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Tenure
                </span>
                :{tenure}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  PrePaymentEligibility
                </span>
                {prepay == true ? (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      props.history.push("/Prepayment/" + loanaccid);
                    }}
                  >
                    Pay
                  </Button>
                ) : (
                  <Button variant="contained" color="success" disabled>
                    Cannot Pay
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Button
          variant="contained"
          size="large"
          style={{ width: "50%" }}
          onClick={() => {
            props.history.push("/LoanSchedule/" + loanaccid);
          }}
        >
          Loan Schedule
        </Button>
      </Container>
    </div>
  );
};

export default LoanAccount;
