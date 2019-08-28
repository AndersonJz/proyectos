import React from 'react';
import store from './store';
import Productos from './components/Productos';
import ProductoForm from './components/ProductoForm';
import Header from './components/shared/Header';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productoform" component={ProductoForm} />
          <Route exact path="/productoform/:id" component={ProductoForm} />
        </Switch>

      </div>
    </Provider>
    </Router>
  );
}

export default App;
