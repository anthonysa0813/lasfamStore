import React, { useContext } from "react";
import { ComponentsState } from "../../context/ComponentsState";
import { ProductsContext } from "../../context/ProductsContext";
// import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { carrito } = useContext(ProductsContext);
  const { data, totalPrice } = carrito;
  const { active, setActive } = useContext(ComponentsState);
  console.log("estado del aside: ", active);
  return (
    <header className="">
      <div className=" header">
        <h1>
          <Link to="/" exact>
            Lasfam<span>Store</span>
          </Link>
        </h1>
        <div className="country-Card ">
          <div className="blockCard ">
            <i className="icon-mapPin"></i>
            <select>
              <option value="CO">Colombia</option>
              <option value="PE">Perú</option>
              <option value="VE">Venezuela</option>
              <option value="MX">Mexico</option>
              <option value="CH">Chile</option>
            </select>
          </div>
          <button
            className="btn btn-success"
            onClick={() => setActive(!active)}
          >
            <span className="icon-iconCart"> {data.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
