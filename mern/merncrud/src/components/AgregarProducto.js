import React, { useState, useEffect } from 'react';
import Error from './shared/Error';
import axios from "axios";
import { uri } from "./shared/Uri";
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
function AgregarProducto({history, setRecargar, producto}) {
let titulo = 'Agregar Producto';
  const [nombrePlatillo, setNombrePlatillo] = useState("");
  const [precioPlatillo, setPrecioPlatillo] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  if (producto) {
    titulo = 'Editar Producto'
  }


useEffect(()=> {
    if (producto) {
        const traer = () => {
            setNombrePlatillo(producto.nombrePlatillo)
            setPrecioPlatillo(producto.precioPlatillo)
            setCategoria(producto.categoria)
        }
        traer();
    }
}, [producto])

  const cambiarCategoria = e => {
    setCategoria(e.target.value);
  };

  const agregarProducto = async e => {
    e.preventDefault();

    if (nombrePlatillo === "" || precioPlatillo === 0 || categoria === "") {
      
      setError(true);
      Swal.fire({
        type: 'error',
        title: '¡Algo anda mal!',
        text: 'Por favor vuelve a intentarlo',
      })
      return;
    }
    setError(false);

    if (producto) {
      try {
        const resultado = await axios.put(uri + "/productos/"+producto._id, {
          nombrePlatillo,
          precioPlatillo,
          categoria
        });
        if ((resultado.status = 200)) {
          Swal.fire("¡Producto Editado!", "El producto se editó correctamente", "success");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const resultado = await axios.post(uri + "/productos", {
          nombrePlatillo,
          precioPlatillo,
          categoria
        });
        if ((resultado.status = 200)) {
          Swal.fire("¡Producto Agregado!", "El producto se agrego correctamente", "success");
        }
      } catch (error) {
        console.log(error);
      }
    }
   
    setRecargar(true)
    history.push('/productos')
  };

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">{titulo}</h1>
      {error ? <Error mensaje={"Todos los campos deben estar llenos"} /> : null}
      <form className="mt-5" onSubmit={agregarProducto}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            value={nombrePlatillo}
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            onChange={e => setNombrePlatillo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            value={precioPlatillo}
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            onChange={e => {
              const precio = parseInt(e.target.value, 10);
              setPrecioPlatillo(precio);
            }}
          />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="Postre"
              onChange={cambiarCategoria}
              checked={categoria === 'Postre'}
            />
            <label className="form-check-label">Postre</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="Bebida"
              onChange={cambiarCategoria}
              checked={categoria === 'Bebida'}
            />
            <label className="form-check-label">Bebida</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="Cortes"
              onChange={cambiarCategoria}
              checked={categoria === 'Cortes'}
            />
            <label className="form-check-label">Cortes</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="Ensalada"
              onChange={cambiarCategoria}
              checked={categoria === 'Ensalada'}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Producto"
        />
      </form>
    </div>
  );
}

export default withRouter(AgregarProducto);
