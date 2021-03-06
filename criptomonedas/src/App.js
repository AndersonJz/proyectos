import React, { useState, useEffect } from "react";
import axios from "axios";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import Cotizacion from "./components/Cotizacion";


function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState({});
  useEffect(() => {
    if (moneda === "") {
      return;
    }
    const cotizarCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const res = await axios.get(url);
      // mostrar Spinner
      setCargando(true);
      //ocultar spinner y guardar resultado
      setTimeout(() => {
        setCargando(false);
        setResultado(res.data.DISPLAY[criptomoneda][moneda])
      }, 1500);
    };

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  //mostrarSpinner o Resultado

  const componente = cargando ? <Spinner /> : <Cotizacion resultado={resultado}/>;
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza criptomonedas al instante</h1>
          <Formulario
            guardarMoneda={guardarMoneda}
            setCriptomoneda={setCriptomoneda}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
