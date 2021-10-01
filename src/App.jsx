import React, { useContext } from "react";
import Header from "./components/header/Header";
import "./index.css";
import "./style.css";
import Hero from "./components/hero/Hero";
import Products from "./components/main/Products";
import ProductsProvider from "./context/ProductsContext";
import AsideCart from "./components/asideCart/AsideCart";
import "animate.css";
import ComponentsProvider from "./context/ComponentsState";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import FormPay from "./components/FormPay/FormPay";

const App = () => {
  return (
    <Router>
      <ComponentsProvider>
        <ProductsProvider>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Hero />
              <div className="wrapper">
                <Products />
              </div>
              <AsideCart />
            </Route>
            <Route path="/pago">
              <FormPay />
              {/* <AsideCart /> */}
            </Route>
          </Switch>
        </ProductsProvider>
      </ComponentsProvider>
    </Router>
  );
};

export default App;
