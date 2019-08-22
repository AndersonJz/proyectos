import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="error-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="error-text">
                <h1 className="error">Error 404</h1>
                <div className="im-sheep">
                  <div className="top">
                    <div className="body" />
                    <div className="head">
                      <div className="im-eye one" />
                      <div className="im-eye two" />
                      <div className="im-ear one" />
                      <div className="im-ear two" />
                    </div>
                  </div>
                  <div className="im-legs">
                    <div className="im-leg" />
                    <div className="im-leg" />
                    <div className="im-leg" />
                    <div className="im-leg" />
                  </div>
                </div>
                <h4>Oops! ¡La página a la que tratas de acceder no existe!</h4>
                <p>Lo sentimos, la página que busca no existe o ha sido cambiada.</p>
                <Link to={'/'} className="btn btn-primary btn-round">Regresar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Error404;