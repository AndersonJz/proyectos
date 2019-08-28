import React, { useEffect } from "react";
import Producto from "./Producto";
// Redux

import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productosActions";

function Productos() {
  const dispatch = useDispatch();
  useEffect(() => {
    // cargando productos cuando el componenete este listo
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  //  acceder al state

  const loading = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);
  const productos = useSelector(state => state.productos.productos);
  return (
    <React.Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un Error...
        </div>
      ) : null}
          <h2 className="text-center my-5">Listado de Productos</h2>
          <div className="card-columns">
          {productos.map(producto => (
                
                  <Producto key={producto._id}
                            producto={producto}></Producto>
                
          ))}
          </div>
          {loading ? "Cargando..." : null}

    </React.Fragment>
  );
}

export default Productos;
