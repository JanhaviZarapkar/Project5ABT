import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import Container from "@mui/material/Container";
import Header from "./Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


function createData(date, emi, principal, interest, oustanding, status) {
  return { date, emi, principal, interest, oustanding, status };
}
const LoanSchedule = (props) => {
  var loanaccid = props.match.params.id; 
  
  const payment = (id) => {
    axios.put("http://localhost:8080/updateloanschedule/loanid?loanid="+loanaccid).then((res) => {
      var response = res.data;
      console.log("Payment Done");
      localStorage.setItem("outstanding",response.outstanding);
      window.location.reload();
      // var temp = rows.filter((data) => {
      //   data.id != id;
      // });
      // setData(temp);
    });
    console.log(id);
  };
  const [datas, setData] = useState([]);
  useEffect(()=>{
  axios.get("http://localhost:8080/getloanschedule/loanid?loanid=" + loanaccid
  ).then((res)=>{
     var response = res.data;
     console.log(response);
    setData(response);
   });
   },[]);
  const rows = [
    createData("Sep 2021", 10000, 7500, 2500, 42500, "Pending"),
    createData("Oct 2021", 10000, 8000, 2000, 34500, "Pending"),
  ];
  const headers = [
    { label: "Date", key: "firstName" },
    { label: "EMI", key: "lastName" },
    { label: "Principal", key: "email" },
    { label: "Interest", key: "age" },
    { label: "outstanding", key: "age" },
    { label: "status", key: "age" },
  ];
  
  // const csvReport = {
  //   data: datas,
  //   headers: headers,
  //   filename: "report",
  // };
  return (
    <div>
      <Header />
      <Container style={{ marginTop: "5%" }}>
        <h1>Loan Schedule</h1>
        {/* <CSVLink {...csvReport}>Download</CSVLink> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">EMI</TableCell>
                <TableCell align="right">Principal</TableCell>
                <TableCell align="right">Interest</TableCell>
                <TableCell align="right">Oustanding</TableCell>
                <TableCell align="right">Payment Status</TableCell>
                <TableCell align="right"> <Button
                      variant="contained"
                      size="large"
                      style={{ width: "50%" }}
                      onClick={
                        payment}
                    >
                      Payment
                    </Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(datas.length>0)? datas.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.emi}</TableCell>
                  <TableCell align="right">{row.principal}</TableCell>
                  <TableCell align="right">{row.interest}</TableCell>
                  <TableCell align="right">{row.outstanding}</TableCell>
                  <TableCell align="right">{row.paid}</TableCell>
                  <TableCell align="right">
                   
                  </TableCell>
                </TableRow>
              )) :  console.log("no data")}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default LoanSchedule;
