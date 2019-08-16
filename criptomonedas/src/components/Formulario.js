import React, { useState, useEffect } from 'react';
import Criptomoneda from './Criptomoneda';
import Error from './Error'
import axios from 'axios';

function Formulario({guardarMoneda, setCriptomoneda}) {
    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false);

    useEffect(() => {
       const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const res = await axios.get(url)
            console.log(res.data.Data);
            guardarCriptomonedas(res.data.Data)
        }
        consultarApi()
        
    }, []);

    const cotizarMoneda = e =>{
        e.preventDefault()
        //validar si los campos estan llenos
        if (monedaCotizar === '' || criptoCotizar === '') {
            guardarError(true)
            return;
        }
        //pasar datos al principal
        guardarError(false)
        guardarMoneda(monedaCotizar);
        setCriptomoneda(criptoCotizar);
    }

    //mostrar error si lo hay
    const componente = (error) ? <Error mensaje='Ambos campos son obligatorios'/>: null;
    return (
        <form onSubmit={cotizarMoneda}>
            {componente}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select className="u-full-width" onChange={ e => guardarMonedaCotizar(e.target.value)}>
                    <option value="">Elige tu Moneda</option>
                    <option value="USD">Dolar</option>
                    <option value="COP">Peso Colombiano</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Libra</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
               
                <select className="u-full-width" onChange={ e => guardarCriptoCotizar(e.target.value)}>
                <option value="">Elige tu Criptooneda</option>
                    { criptomonedas.map(criptomoneda => (
                        <Criptomoneda key={criptomoneda.CoinInfo.Id} criptomoneda={criptomoneda} />
                    ))}
                </select>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Cotizar"/>
        </form>
    )
}

export default Formulario;