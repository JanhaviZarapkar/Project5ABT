import React, { useEffect, useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";

const Prepayment = (props) => {
  const [amount, setAmount] = useState(100.0);
  function compute() {
    props.history.push("/Home");
  }
  useEffect(() => {
    axios.get("http://localhost:4000/auth/login").then((res) => {
      var response = res.data;
      console.log(response);
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
