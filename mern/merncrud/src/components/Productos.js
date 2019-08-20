import React, { Fragment } from 'react';
import ListaProductos from './ListaProductos'
import NoLogeado from './shared/NoLogeado'

function Productos({productos, setRecargar, cargando, autenticado}) {
    if (autenticado === false) {
        return (
            <NoLogeado />
        )
    }
    if (Object.keys(productos).length === 0 && cargando === true) {
        return (
            <div className="text-center">
                <h1 className="text-center">Cargando...</h1>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
            
        )
    }
    
    if (Object.keys(productos).length === 0 && cargando === false) {
        return <h1 className="text-center">No hay Productos para mostrar</h1>
    }
    
    return (
        <Fragment>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ListaProductos key={producto._id} producto={producto}
                    setRecargar={setRecargar}
                     />
                    ))}

            </ul>
        </Fragment>
    )
}

export default Productos;