import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITOSA, DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_A_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_A_EDITAR, PRODUCTO_EDITAR_EXITO, PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTO, EDICION_PRODUCTO_EXITO, EDICION_PRODUCTO_ERROR } from '../types';
import clienteAxios from '../components/config/axios'

// crear nuevo producto - función principal

export function crearNuevoProductoAction(producto) {
    return (dispatch) =>{
        dispatch( nuevoProducto() );

        // insertar en el api
        clienteAxios.post('/libros', producto).then( respuesta =>{
            console.log(respuesta);
            // inserta correctamente
            dispatch(agregarProductoExito(producto) )
        }).catch(error =>{
            console.log(error);

            // si hay un error

            dispatch( agregarProductoError (true))
            
        })

    }
}

export const nuevoProducto = () => (
    {
        type: AGREGAR_PRODUCTO
    }
)

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})

export function obtenerProductosAction() {
    return dispatch => {
dispatch( obtenerProductosComienzo() );

// CONSULTAR API
clienteAxios.get('/libros').then(respuesta => {
dispatch( descargaProductosExitosa(respuesta.data) )

}).catch(error => dispatch ( descargaProductosError() )
)
    }
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
})

// funcion qu eelimina un producto

export function borrarProductoAction(id) {
    return (dispatch) =>{
        dispatch( obtenerProductoEliminar())

        // eliminar en api
        clienteAxios.delete(`/libros/${id}`).then(res => {
            console.log(res);
            
            // eliminar del State
            dispatch( eliminarProductoExito(id) )
            
        }).catch(err => {
            dispatch ( eliminarProductoError() )
            
        })
    }
}
export const obtenerProductoEliminar = () => ({
        type: OBTENER_PRODUCTO_A_ELIMINAR
    })

export const eliminarProductoExito = id =>({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
})

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR
})

// obtener producto a editar

export function editarPrductoAction(id) {
    return (dispatch) => {
        dispatch( obtenerProductoAction());

                //obtener producto desde el api
                clienteAxios.get(`/libros/${id}`).then(res =>{
                    dispatch( productoEditarExito (res.data))
                }).catch(err => {
                    dispatch( productoEditarError())
                })
    }
}

export const obtenerProductoAction = () =>({
    type: OBTENER_PRODUCTO_A_EDITAR
})

export const productoEditarExito = producto => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})

export const productoEditarError = () => ({
    type: PRODUCTO_EDITAR_ERROR
})

// modifica producto en api y state

export function productoEditadoAction (producto) {
return dispatch => {
    dispatch( comenzarEdicionProducto() )
}
}

export const comenzarEdicionProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})