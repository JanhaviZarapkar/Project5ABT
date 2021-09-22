import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import About from "./About";

const Home = (props) => {
  const [AccNo, setAccno] = useState("00000");
  const [Name, setName] = useState("naman");
  const [Email, setEmail] = useState("email@mail.com");
  const [Address, setAddress] = useState("Some Address");
  const [CurrentBalance, setCurrentBalance] = useState(100.0);
  const [Salary, setSalary] = useState(1000.0);
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
          <Paper elevation={3} style={{ padding: "1.5rem" }}>
            <h1>Account Details</h1>
            <br />
            <Grid container spacing={2} style={{ textAlign: "left" }}>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Account Number
                </span>
                :{AccNo}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  {" "}
                  Name{" "}
                </span>
                :{Name}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Email{" "}
                </span>
                :{Email}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Address{" "}
                </span>
                :{Address}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  CurrentBalance{" "}
                </span>
                :{CurrentBalance}
              </Grid>
              <Grid item xs={4}>
                <span style={{ color: "#0079b5", fontWeight: "bold" }}>
                  Salary{" "}
                </span>
                :{Salary}
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Button
          variant="contained"
          size="large"
          style={{ width: "50%" }}
          onClick={() => {
            props.history.push("/LoanApplication");
          }}
        >
          Apply For Loan
        </Button>
      </Container>
      <About />
    </div>
  );
};

export default Home;
