import React, { Fragment } from 'react';
import ListaProductos from './ListaProductos'

function Productos({productos, setRecargar}) {

    if (Object.keys(productos).length === 0) {
        return <h1 className="text-center">No hay Productos para mostrar</h1>
    }
    
    return (
        <Fragment>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ListaProductos key={producto._id} producto={producto}
                    setRecargar={setRecargar} />
                    ))}

            </ul>
        </Fragment>
    )
}

export default Productos;