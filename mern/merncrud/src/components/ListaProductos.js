import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { uri } from './shared/Uri'
import Swal from 'sweetalert2'

function ListaProductos({setRecargar, producto}) {
    const eliminarProducto = async (_id) =>{
       try {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Esta Seguro?',
            text: "¡Va a eliminar este producto!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, ¡Eliminar!',
            cancelButtonText: 'No, ¡Cancelar!',
            reverseButtons: true
          }).then( async (result) => {
            if (result.value) {
              const resultado = await axios.delete(uri + '/productos/'+ _id)
              setRecargar(true)
              swalWithBootstrapButtons.fire(
                '¡Eliminado!',
                'El producto fue eliminado',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                '¡El producto esta a salvo! :)',
                'error'
              )
            }
          })
  
       } catch (error) {
           console.log(error);
           Swal.fire({
            type: 'error',
            title: '¡Algo anda mal!',
            text: 'Por favor vuelve a intentarlo',
          })
       }
    }

    return(
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombrePlatillo} {''}
                <span className="font-weigtht-bold">${producto.precioPlatillo}</span>
            </p>
            <div>
                <Link 
                    to={`/productos/editar/${producto._id}`}
                    className="btn btn-success mr-2">
                        Editar
                </Link>
                <button type="button"
                        className="btn btn-danger"
                        onClick={() => eliminarProducto(producto._id)}>Eliminar &times;</button>
            </div>
        </li>
    )
    
}

export default ListaProductos;
