import React, { Component } from 'react';
import './Componentes/Clientes/css.css'
import Produto from './Componentes/Produtos/Produto'
import AppCliente from './Componentes/Clientes/AppCliente'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/product" exact={true} component={Produto} />
            <Route exact path="/Cliente" component={AppCliente} />
        </Switch>
    </ BrowserRouter>
    );
  }
}

export default App;
