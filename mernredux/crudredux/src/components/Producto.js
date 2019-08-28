import React from "react";
import Currency from 'react-currency-formatter';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// Redux
import { borrarProductoAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

function Producto({producto}) {
    // Dispatch para ejecutar las Acciones
    const dispatch = useDispatch();
    const confirmarEliminarProducto = id => {
        // Confirmacion de Sweet alert
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "¡No podras recuperar este elemento!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Eliminar!'
          }).then((result) => {
            if (result.value) {
                dispatch(borrarProductoAction(id))
              Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado',
                'success'
              )
            }
          })
    }

  return (
      <div className="card">
        <img
          src="https://kali.training/wp-content/uploads/2017/06/kali-linux-revealed-book-mock-3.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">
          <Currency
  quantity={producto.precio}
  currency="COP"
/>
          </p>
          <p className="card-text text-center">
            <Link to={`/productoform/${producto._id}`} className="btn btn-success mr-2">
                Editar
            </Link>
            <button className="btn btn-danger"
            onClick={() => confirmarEliminarProducto(producto._id)}>Eliminar</button>
          </p>
        </div>
      </div>
  );
}
export default Producto;
