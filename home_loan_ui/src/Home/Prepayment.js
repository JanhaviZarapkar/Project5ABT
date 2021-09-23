import React, { useEffect, useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";

const Prepayment = (props) => {
  const [amount, setAmount] = useState(100.0);
  var loanaccid = props.match.params.id;
  function compute() {
    axios.post("http://localhost:8080/delete/" + loanaccid).then((res) => {
      var response = res.data;
      console.log(response);
      if(response){
        alert("Your loan is clear");
        props.history.push("/Home");
      }
    

    });
   
  }
  var loanaccid = props.match.params.id;
  useEffect(() => {
    axios.get("http://localhost:8080/loan/" + loanaccid).then((res) => {
      var response = res.data;
     // console.log(response) needed outstanding amount;
    setAmount(localStorage.getItem("outstanding"));

    });
  });

  return (
    <div>
      <Header />
      <Container style={{ margin: "5%" }}>
        <Box>
          {
            <Button
              variant="contained"
              size="large"
              style={{ width: "50%" }}
              onClick={() => {
                compute();
              }}
            >
              {" "}
              Proceed Payment:{amount}
            </Button>
          }
        </Box>
      </Container>
    </div>
  );
};

export default Prepayment;
