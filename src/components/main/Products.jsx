import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { firebase } from "../../firebase";
import "./main.css";

const Products = () => {
  const { carrito, setCarrito } = useContext(ProductsContext);
  const { data } = carrito;
  const [products, setProducts] = useState([]);
  const [buttonActive, setButtonActive] = useState(true);
  useEffect(() => {
    getProducts();
  }, [carrito]);

  const getProducts = async () => {
    const db = firebase.firestore();
    try {
      const response = await db.collection("futbol").get();
      const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(data.map((item) => console.log(item.id)));
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProduct = (product) => {
    setCarrito({
      ...carrito,
      data: [...data, product],
    });
  };
  return (
    <article className="products">
      <h1 className="text-center">Productos</h1>
      <div className="productsContain ">
        {products.map((product) => (
          <div className="cartProduct " key={product?.id}>
            <div className="imgProduct">
              <img src={product.url} alt={product.name} />
            </div>
            <div className="infoProduct">
              <span className="fw-bold">{product.name}</span>
              <span className="fs-5">${product.price}</span>
            </div>
            <button
              className={
                data.find((p) => p.id === product.id)
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => agregarProduct(product)}
            >
              {data.find((p) => p.id === product.id)
                ? "Producto en el carrito"
                : "Agregar al carrito"}
            </button>
          </div>
        ))}
      </div>
      <div className="productsContain  ">
        {products.map((product) => (
          <div className="cartProduct" key={product.id}>
            <div className="imgProduct">
              <img src={product.url} alt={product.name} />
            </div>
            <div className="infoProduct ">
              <span className="fw-bold">{product.name}</span>
              <span className="fs-5">${product.price}</span>
            </div>
            <button
              className={
                data.find((p) => p.id === product.id)
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => agregarProduct(product)}
            >
              {data.find((p) => p.id === product.id)
                ? "Producto en el carrito"
                : "Agregar al carrito"}
            </button>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Products;
