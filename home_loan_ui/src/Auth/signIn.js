import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Header from "../Home/Header2";

const SignIn = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function submitFunction() {
    console.log(username + ":" + password);
    axios
      .post("http://localhost:4000/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        var response = res.data;
        console.log(response);
        if (response.login) {
          localStorage.setItem("user", JSON.stringify(response));
          props.history.push("/home");
        } else {
          props.history.push("/SignIn");
        }
      });
    props.history.push("/home");
  }
  return (
    <div>
      <Header />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: "10%" }}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          onClick={() => {
            submitFunction();
          }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default SignIn;
