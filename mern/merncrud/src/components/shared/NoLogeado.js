import React from 'react';
import { Link }from 'react-router-dom'

function NoLogeado() {

    return (
    <div className="text-center">
    <h3 className="text-center">Parece que no has iniciado sesión</h3>
    <h4 className="text-center">Volver al login</h4>
    <Link to='/' className="btn btn-success">Regresar</Link>
</div>
)
}

export default NoLogeado;