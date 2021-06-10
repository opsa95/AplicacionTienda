import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/Route/ProtectedRoute.component.jsx";
import { Redirect } from "react-router-dom";
import Header from "./components/Header/Header.component"
import Nav from "./components/Nav/Nav.components";
import LogInPage from "./pages/LogIn/LogIn.page";
import Store from "./pages/Store/Store.page";
import About from "./pages/About/About.page";
import Product from "./pages/Product/Product.page";
import { useSelector } from "react-redux";

export default function App() {
  const allReducers = useSelector((state) => state);
  localStorage.setItem("admin@email.com", "12345");
  return (
    <div
      className="container vh-100 mw-100"
      style={{ backgroundColor: allReducers.esDeDia ? "#f8f9fa" : "#212529" }}
    >
      <Router>
        <header className="row"><Header></Header></header>
        <Nav />

        <div className="container" >
          <Route exact path="/" component={LogInPage} />
          <ProtectedRoute exact path="/store" component={Store} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute path="/product/:MODIFICABLE" component={Product} />
          <Redirect
            from="/**"
            to={{
              pathname: "/",
              state: {
                badURL: true,
              },
            }}
          />
        </div>
      </Router>
    </div>
  );
}
