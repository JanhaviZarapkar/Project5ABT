import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const About = () => {
  return (
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
        style={{ margin: "3%" }}
      >
        <dl style={{ textAlign: "left" }}>
          <dt>
            <strong>What is Amortization?</strong>
          </dt>
          <dd>
            <p>
              There are two general definitions of amortization. The first is
              the systematic repayment of a loan over time. The second is used
              in the context of business accounting and is the act of spreading
              the cost of an expensive and long-lived item over many periods.
              The two are explained in more detail in the sections below.
            </p>
          </dd>
          <dt>
            <strong>Paying Off a Loan Over Time</strong>
          </dt>
          <dd>
            <p>
              When a borrower takes out a mortgage, car loan, or personal loan,
              they usually make monthly payments to the lender; these are some
              of the most common uses of amortization. A part of the payment
              covers the interest due on the loan, and the remainder of the
              payment goes toward reducing the principal amount owed. Interest
              is computed on the current amount owed and thus will become
              progressively smaller as the principal decreases. It is possible
              to see this in action on the amortization table. Credit cards, on
              the other hand, are generally not amortized. They are an example
              of revolving debt, where the outstanding balance can be carried
              month-to-month, and the amount repaid each month can be varied.
              <br />
              Please use our Credit Card Calculator for more information or to
              do calculations involving credit cards, or our Credit Cards Payoff
              Calculator to schedule a financially feasible way to pay off
              multiple credit cards. Examples of other loans that aren't
              amortized include interest-only loans and balloon loans. The
              former includes an interest-only period of payment, and the latter
              has a large principal payment at loan maturity.
            </p>
          </dd>
        </dl>
      </Box>
    </Container>
  );
};

export default About;
