import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import React from "react";
import grey from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Headers = (props) => {
  function signOut() {
    props.history.push("/Signin");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Home Loan
          </Typography>
          <Button variant="contained" color="success" onClick={signOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default withRouter(Headers);
