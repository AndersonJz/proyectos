import { createStore } from 'redux';
import reducer from './reducers'
import {  obtnerStateStorage, guardarStateStorage } from './localStorage';

// Definiendo state inicial

// const initialState = {};
// obtener datos del localStorage
const storageState = obtnerStateStorage();

const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () =>{
    guardarStateStorage({
        citas: store.getState().citas
    })
    
})

export default store;