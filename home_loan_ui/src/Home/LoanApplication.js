import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Header from "./Header";
import axios from "axios";
const LoanApplication = (props) => {
  const [loanamt, setloanamt] = useState(1000.0);
  const [loantime, setloantime] = useState(3);
  const [loanrate, setloanrate] = useState(7.5);
  const [monthPay, setmonthPay] = useState(100);
  const [totPay, settotPay] = useState(1000);
  const amtChange = (e) => {
    setloanamt(e.target.value);
    console.log(e.target.value);
    var emi =
      (((loanamt * loanrate) / 1200) *
        Math.pow(1 + loanrate / 1200, loantime)) /
      Math.pow(1 + loanrate / 1200, loantime - 1);
    setmonthPay(emi.toFixed(2));
    settotPay(emi.toFixed(2) * 12);
  };
  const timeChange = (e) => {
    setloantime(e.target.value);
    console.log(e.target.value);
    var emi =
      (((loanamt * loanrate) / 1200) *
        Math.pow(1 + loanrate / 1200, loantime)) /
      Math.pow(1 + loanrate / 1200, loantime - 1);
    setmonthPay(emi.toFixed(2));
    settotPay(emi.toFixed(2) * 12);
  };
  const rateChange = (e) => {
    setloanrate(e.target.value);
    console.log(e.target.value);
    var emi =
      (((loanamt * loanrate) / 1200) *
        Math.pow(1 + loanrate / 1200, loantime)) /
      Math.pow(1 + loanrate / 1200, loantime - 1);
    setmonthPay(emi.toFixed(2));
    settotPay(emi.toFixed(2) * 12);
  };
  const calculate = () => {
    //var savid = JSON.parse(localStorage.getItem("user")).userid;
    //var cusid = JSON.parse(localStorage.getItem("user")).userid;
    var cusid=10;
    var salary=5000;
    axios.get("http://localhost:8080/saving/" + savid).then((res) => {
      var response = res.data;
      salary = response.salary;
    });

    console.log(loanamt);
    if (loanamt > salary) {
      var x = salary*50;
      alert("Maximum loan amount  : " + x);
      props.history.push("/LoanApplication");
    } else {
    //  var loanaccid = 1;
      var savid = 1001;
      axios
        .post("http://localhost:8080/add", {
          total_loan_amount:loanamt,
          rate:loanrate,
          tenure:loantime,
          status: "Ongoining",
         /* loan_prepayment_eligibility:false, */
          customer_id:cusid,
          saving_account_id:savid
        })
        .then((res) => {
          var response = res.data;
          console.log(response);
          var loanaccid=response;
          props.history.push("/loanAccount/" + loanaccid);
        });
    
    }
  };
  useEffect(() => {});
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
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <Paper elevation={3} style={{ padding: "1.5rem", height: "auto" }}>
            <h1>Loan Application</h1>
            <br />
            <Grid
              container
              spacing={2}
              style={{
                textAlign: "left",
                width: "80%",
                marginLeft: "3%",
              }}
            >
              <Grid item xs={5} marginRight={8}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    Loan Amount
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Amount
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        defaultValue={loanamt}
                        onChange={(e) => {
                          amtChange(e);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    Loan Term
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Time
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">
                            Months
                          </InputAdornment>
                        }
                        value={loantime}
                        onChange={timeChange}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    Interest Rate (APR)
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Rate
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">%</InputAdornment>
                        }
                        defaultValue={loanrate}
                        onChange={rateChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      style={{
                        background: "#0079b5",
                        padding: "1rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Monthly Pay: ${monthPay}
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    Total of 12 Loan Payments ${totPay}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                style={{ width: "50%" }}
                onClick={calculate}
              >
                Apply
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default LoanApplication;
