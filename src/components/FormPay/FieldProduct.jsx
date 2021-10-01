import React, { useContext, useState } from "react";
import { ComponentsState } from "../../context/ComponentsState";
import { ProductsContext } from "../../context/ProductsContext";
import "./fieldProduct.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
const FieldProduct = (props) => {
  const { active, setActive } = useContext(ComponentsState);
  const { carrito, setCarrito } = useContext(ProductsContext);
  const { data } = carrito;
  console.log(carrito);
  const [user, setUser] = useState({
    email: "",
    numberCard: "",
    date: "",
    cvc: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(false);
  const { email, numberCard, date, cvc } = user;

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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !numberCard.trim() || !date.trim() || !cvc.trim()) {
      setError(true);
      return;
    }
    setError(null);

    setProgress(true);
    setTimeout(() => {
      setSuccess(true);
      setProgress(false);
      setCarrito({
        data: [],
      });
    }, 5000);
  };

  return (
    <section className="fieldContainer">
      <div className="listProducts mt-3 mb-4">
        {data.length <= 0 && (
          <h2 className="text-center">No hay productos :(</h2>
        )}
        {data.map((p) => (
          <>
            <div className="productContent ">
              <div className="columna1 mb-4">
                <div className="imagePro">
                  <img src={p.url} alt={p.name} />
                </div>
                <div className="infoPro">
                  <strong>{p.name}</strong>
                  <strong>${p.price}</strong>
                </div>
              </div>

              <div className="controlProduct">
                <button
                  className="botonIcon btn btn-danger"
                  onClick={() => deleteProduct(p.id)}
                >
                  <i className="icon-iconX "></i>
                </button>
                <button
                  className="botonIcon btn btn-primary mx-3"
                  onClick={() => addProductCount(p.id)}
                >
                  <i className="icon-iconPlus "></i>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="formularioPayd ">
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="alert alert-danger text-center">
              Todos los campos son obligatorios
            </p>
          )}
          {progress && <CircularProgress className="text-center" />}
          {success && (
            <>
              <p className="alert alert-success text-center">
                Gracias por tu compra :)
              </p>
            </>
          )}
          <TextField
            id="outlined-basic"
            name="email"
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="dense"
            onChange={handleChange}
          />
          <span className="mt-3">Información de la tarjeta</span>
          <TextField
            id="outlined-basic"
            name="numberCard"
            placeholder="1212 3434 5555 3192"
            variant="outlined"
            fullWidth
            margin="dense"
            className="mt-3"
            onChange={handleChange}
          />
          <div className="infoCard">
            <TextField
              label="fecha de vencimiento"
              id="outlined-size-small"
              placeholder="MM/YY"
              name="date"
              size="small"
              margin="dense"
              className="mt-3"
              onChange={handleChange}
            />
            <TextField
              label="Clave Secreta"
              name="cvc"
              id="outlined-size-small"
              placeholder="CVC"
              size="small"
              margin="dense"
              className="mt-3"
              onChange={handleChange}
            />
          </div>
          <div className="fullSpace ">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="mt-3"
            >
              Pagar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default withRouter(FieldProduct);
