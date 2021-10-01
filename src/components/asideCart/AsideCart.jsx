import React, { useContext } from "react";
import { ComponentsState } from "../../context/ComponentsState";
import { ProductsContext } from "../../context/ProductsContext";
import "./asideCart.css";
import { Link } from "react-router-dom";

const AsideCart = () => {
  const { active, setActive } = useContext(ComponentsState);
  const { carrito, setCarrito } = useContext(ProductsContext);
  const { data } = carrito;
  // console.log(data.data);
  // console.log("la data es: ", data);

  const deleteProduct = (id) => {
    setCarrito({
      ...carrito,
      data: carrito.data.filter((p) => p.id !== id),
    });
  };

  const addProductCount = (id) => {
    setCarrito({
      ...carrito,
      data: carrito.data.map((p) =>
        p.id === id
          ? {
              ...p,
              count: p.count + 1,
              price: parseInt(p.price) * parseInt(p.count),
            }
          : p
      ),
    });
  };

  const closeCart = () => {
    setActive(!active);
  };

  return (
    <aside
      className={`animate__animated   ${
        active ? "active animate__slideInRight" : "animate__bounceOut"
      }`}
    >
      <section className="listProducts ">
        {data.length > 0 ? (
          data.map((p) => (
            <div className="productItem ">
              <div className="avatarProduct">
                <img src={p.url} alt="" />
              </div>
              <p>${p.price}</p>
              <p>{p.count} unid.</p>
              <button
                className="botonIcon btn btn-danger"
                onClick={() => deleteProduct(p.id)}
              >
                <i className="icon-iconX "></i>
              </button>
              <button
                className="botonIcon btn btn-primary"
                onClick={() => addProductCount(p.id)}
              >
                <i className="icon-iconPlus "></i>
              </button>
            </div>
          ))
        ) : (
          <>
            <div className="modalCart ">
              <h4 className="text-center">No hay productos...</h4>
              <i className="icon-iconCart carritoModal"></i>
            </div>
          </>
        )}
        {data.length > 0 && (
          <button className="btn btn-outline-success btn-block mt-2">
            <Link to="/pago">Ir a Pagar</Link>
          </button>
        )}
        <button className="btn btn-dark mt-2 mx-2" onClick={closeCart}>
          &times; Cerrar
        </button>
      </section>
    </aside>
  );
};

export default AsideCart;
