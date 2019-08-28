import React, { useState, useEffect } from "react";

// Redux
import { crearNuevoProductoAction, editarPrductoAction, productoEditadoAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from  '../actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';


function ProductoForm({history, match}) {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState('');
  const [idProducto, setIdProducto] = useState('');
  const [titulo, setTitulo] = useState('Agregar Producto');

  // obtener datos del state

  const error = useSelector((state) => state.error.error);
  const producto = useSelector( state => state.productos.producto);


  // crear nuevo producto
  const dispatch = useDispatch();
  const editarProducto = producto => dispatch( productoEditadoAction(producto));
  const agregarProducto = (producto) => dispatch( crearNuevoProductoAction (producto) );
  const validarFormulario = () => dispatch ( validarFormularioAction () );
  const exitoValidacion = () => dispatch( validacionExito());
  const errorValidacion = () => dispatch( validacionError());
  const { id } = match.params;

      // obteniendo id de url

  useEffect(() => {
if (id) {
  if (producto) {
    if (producto.nombre !== nombre) {
      dispatch( editarPrductoAction(id) );
      setNombre(producto.nombre)
      setPrecio(producto.precio)
      setImagen(producto.imagen)
      setIdProducto(producto._id)
      setTitulo('Editar Producto')
    }
  }

}
  }, [dispatch, id, producto]);
 
  const submitForm = e =>{
    e.preventDefault();

    // Validar Formulario
    validarFormulario();
if(nombre.trim() === '' || precio === 0 || imagen.trim() === '') {
  errorValidacion();
  return;
}

    // si pasa la validación
    exitoValidacion();
if (idProducto !== '') {
  editarProducto({
    nombre,
    precio,
    imagen,
    idProducto
  })
} else {
      //nuevo producto
      agregarProducto({
        nombre,
        precio,
        imagen
      })
}
    // redireccionar
    history.push('/');
  }
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              {titulo}
            </h2>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>Nombre Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Libro"
                  defaultValue={nombre}
                  onChange={ e => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Libro</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Libro"
                  defaultValue={precio}
                  onChange={ e => setPrecio(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Imagen</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Imagen Libro"
                  defaultValue={imagen}
                  onChange={ e => setImagen(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar
              </button>
            </form>
            { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoForm;
