import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR,
COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITOSA, DESCARGA_PRODUCTOS_ERROR,
OBTENER_PRODUCTO_A_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR,
OBTENER_PRODUCTO_A_EDITAR, PRODUCTO_EDITAR_EXITO, PRODUCTO_EDITAR_ERROR,
COMENZAR_EDICION_PRODUCTO, EDICION_PRODUCTO_EXITO, EDICION_PRODUCTO_ERROR } from '../types';

//cada reducer tiene state

const initialState = {
    productos: [],
    producto: {},
    error: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                error: false
            }
            
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                error: false,
                productos: [...state.productos, action.payload]
            }
        
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true,
                producto: {}
            }
        case DESCARGA_PRODUCTOS_EXITOSA:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: false,
                producto: {}
            }
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos: [],
                loading: false,
                error: true,
                producto: {}
        }
        case OBTENER_PRODUCTO_A_ELIMINAR:
        return {
            ...state,
            error: false
        }
        case PRODUCTO_ELIMINADO_EXITO:
        return {
            ...state,
            error: false,
            productos: state.productos.filter( producto => producto._id !== action.payload )
        }
        case PRODUCTO_ELIMINADO_ERROR:
        return {
            ...state,
            error: true
        }
        case OBTENER_PRODUCTO_A_EDITAR: 
        return {
            ...state,
            error: false,
        }
        case PRODUCTO_EDITAR_EXITO: 
        return {
            ...state,
            error: false,
            producto: action.payload
        }
        case PRODUCTO_EDITAR_ERROR: 
        return {
            ...state,
            error: true,
        }
        case COMENZAR_EDICION_PRODUCTO:
            return {
                ...state,
                error: false
            }
        case EDICION_PRODUCTO_EXITO:
            return {
                ...state,
                productos: state.productos.map(producto => producto._id === action.payload._id ?
                    producto = action.payload : producto),
                error: false
            }
        case EDICION_PRODUCTO_ERROR:
            return {
                ...state,
                error: true
            }
    
        default:
            return state
    }
}