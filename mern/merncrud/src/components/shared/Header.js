import React, { Fragment } from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';
import { deleteToken } from '../services/AuthService'
import Swal from 'sweetalert2';

function Header({autenticado, setAutenticado, history}) {
const cerrarSesion = () =>{

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
            text: "¡Va a cerrar sesión!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No, ¡Cancelar!',
            reverseButtons: true
          }).then( async (result) => {
            if (result.value) {
                deleteToken();
                setAutenticado(false);
                history.push('/');
              swalWithBootstrapButtons.fire(
                '¡Adiós!',
                'Sesión Cerrada',
                'warning'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                '¡Puede seguir trabajando! :)',
                'success'
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
if (autenticado === false) {
    return null
}
if (window.location.pathname === '/') return null
    return ( 
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link to="/productos" className="navbar-brand">
                    MERN Stack
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li>
                        <NavLink to="/productos" className="nav-link" activeClassName="active">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nuevoproducto" className="nav-link" activeClassName="active">
                            Nuevo Producto
                        </NavLink>
                    </li>
                </ul>
       
      <button className="btn btn-danger my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesión</button>

            </div>
        </nav>
        </Fragment>
    )

}

export default withRouter(Header);