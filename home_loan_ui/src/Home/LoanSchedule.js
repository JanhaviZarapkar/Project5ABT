import React from "react";
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

function createData(date, emi, principal, interest, oustanding, status) {
  return { date, emi, principal, interest, oustanding, status };
}

const rows = [
  createData("Sep 2021", 10000, 7500, 2500, 42500, "Pending"),
  createData("Oct 2021", 10000, 8000, 2000, 34500, "Pending"),
];

const LoanSchedule = () => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: "5%" }}>
        <h1>Loan Schedule</h1>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
                  <TableCell align="right">{row.oustanding}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default LoanSchedule;
