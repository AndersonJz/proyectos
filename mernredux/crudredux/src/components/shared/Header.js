import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary
        justify-content-between text-white">
            <h1>
                <Link to={'/'} className="text-light">
                MERN - Redux
                </Link>
            </h1>

            <Link to={'/productoform'} className="btn btn-success nuevo-post d-block d-md-inline-block m-4">
                Nuevo Libro &#43;
            </Link>
        </nav>
    )
}

export default Header;