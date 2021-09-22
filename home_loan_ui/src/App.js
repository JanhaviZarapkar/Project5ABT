import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Auth/signIn";

import Home from "./Home/Home.js";
import LoanApplication from "./Home/LoanApplication";
import LoanAccount from "./Home/LoanAccount";
import Prepayment from "./Home/Prepayment";
import LoanSchedule from "./Home/LoanSchedule";

import "./App.css";
import SignOut from "./Auth/signout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/home" component={Home} />
        <Route path="/LoanApplication" component={LoanApplication} />
        <Route path="/loanAccount/:id" component={LoanAccount} />
        <Route path="/Prepayment/:id" component={Prepayment} />
        <Route path="/LoanSchedule/:id" component={LoanSchedule} />
      </BrowserRouter>
    </div>
  );
}

export default App;
