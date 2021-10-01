import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [carrito, setCarrito] = useState({
    data: [],
  });

  return (
    <ProductsContext.Provider value={{ carrito, setCarrito }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
