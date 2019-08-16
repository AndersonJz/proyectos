import React, {useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
import axios from 'axios'
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

function App() {
  //Usar UseSatate con 3 States
const [artista, agregarArtista] = useState('');
const [letra, agregarLetra] = useState([]);
const [info, agregarInfo] = useState({});

// Metodo para consultar la Api de las Letras
const consultarApiletra = async (busqueda) =>{
const {artista, cancion} = busqueda
 const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
 const resultado = await axios.get(url)
 // almacenar letra
agregarLetra(resultado.data.lyrics)
//almacenar el artista que se busco

agregarArtista(artista)
  
}
// consultar api de información 
const consultarApiinformacion = async () =>{
  if (artista) {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
const resultado = await axios.get(url)
agregarInfo(resultado.data.artists[0])
  }
}
 useEffect(() => {
consultarApiinformacion()
 },[artista]);
  return (
<Fragment>
  <Formulario consultarApiletra={consultarApiletra}/>
  .<div className="container">
    <div className="row">
      <div className="col-md-6">
        <Informacion info={info}/>
      </div>
      <div className="col-md-6">
        <Cancion 
        letra={letra}
        />
      </div>
    </div>
  </div>

</Fragment>
  )
}

export default App;
