import React, { Component } from 'react';
import Produto from './Componentes/Produtos/Produto'
import AppCliente from './Componentes/Clientes/AppCliente'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Menu from './template/menu'
import Routes from './template/routes'

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>         
            <Route exact path="/product" exact={true} component={Produto} />
            <Route exact path="/Cliente" component={AppCliente} />
            <Menu />
            {/* <Routes /> */}
          </Switch>
        </ BrowserRouter>
      </div>
    );
  }
}

export default App;
