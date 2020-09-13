import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStatevalue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStatevalue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log("user details", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/check">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
