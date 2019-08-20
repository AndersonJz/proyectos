import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Header({autenticado}) {
if (window.location.pathname === '/login') return null
    return ( 
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
            </div>
        </nav>
    )

}

export default Header;