import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Button from "@mui/material/Button";

const LoanAccount = (props) => {
  const [prepay, setprepay] = useState(false);
  const [SavAccNo, setSavAccno] = useState("00000");
  const [amount, setamount] = useState("00000");
  const [rate, setrate] = useState("00000");
  const [tenure, settenure] = useState("00000");
  const [status, setstatus] = useState("00000");
  const [loanAccNo, setloanAccNo] = useState("00000");
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
                      props.history.push("/Prepayment/" + loanAccNo);
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
            props.history.push("/LoanSchedule");
          }}
        >
          Loan Schedule
        </Button>
      </Container>
    </div>
  );
};

export default LoanAccount;
