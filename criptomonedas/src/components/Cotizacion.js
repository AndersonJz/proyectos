import React from 'react';

function Cotizacion({resultado}) {
if (Object.keys(resultado).length === 0) {
    return null
}
    return(
    <div className="resultado">
        <h2>Resultado</h2>
        <p className="precio">El Precio es <span>{resultado.PRICE}</span> </p>
        <p className="precio">Precio más alto del día <span>{resultado.HIGHDAY}</span> </p>
        <p className="precio">Precio más bajo del día <span>{resultado.LOWDAY}</span> </p>
        <p className="precio">Variación ultimas 24 horas <span>{resultado.CHANGEPCT24HOUR}%</span> </p>
        <p className="precio">Última actualización <span>{resultado.LASTUPDATE}</span> </p>
    </div>
)
}
export default Cotizacion;