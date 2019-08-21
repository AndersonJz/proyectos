import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './Login.css'
import { uri } from '../components/shared/Uri';
import Swal from 'sweetalert2';
import { setToken } from '../components/services/AuthService';

function Login({setAutenticado, history}) {
const [usuario, setUsuario] = useState('');
const [password, setPassword] = useState('');
const validarLogin = async e => {
    e.preventDefault();
    const resultado = await axios.post(uri + '/login', {
        usuario,
        password
    }).catch(err => {
      Swal.fire({
        type: 'error',
        title: '¡Error!',
        text: 'Usuario o contraseña incorrectos',
      })
      return;
    });
    if (resultado) {
    setToken(resultado.data);
    setAutenticado(true)
    Swal.fire("¡Bienvenido!", "Ahora puedes gestionar platillos", "success");
    history.push('/productos')
    } 
}
    return (
      <div className="body">
        <div id="login">
        <h3 className="text-center text-white pt-5 animated swing">Restaurante</h3>
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center animated pulse">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={validarLogin}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">Usuario:</label><br />
                    <input type="text" name="username" id="username" className="form-control" onChange={ e => setUsuario(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} required/>
                  </div>
                  <div className="form-group text-center">
                    <input type="submit" name="submit" className="btn btn-info btn-md" defaultValue="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default withRouter(Login);