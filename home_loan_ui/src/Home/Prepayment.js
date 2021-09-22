import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Prepayment = (props) => {
  function compute() {
    props.history.push("/Home");
  }
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
              Proceed Payment:
            </Button>
          }
        </Box>
      </Container>
    </div>
  );
};

export default Prepayment;
