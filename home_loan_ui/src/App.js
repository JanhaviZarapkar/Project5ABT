import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Auth/signIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/SignIn" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
