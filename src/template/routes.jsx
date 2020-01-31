import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Produto from '../Componentes/Produtos/Produto'
import AppCliente from '../Componentes/Clientes/AppCliente'

export default props => (
    <Router history={hashHistory}>
        <Route path='/Cliente' component={AppCliente} />
        <Route path='/product' component={Produto} />
        <Redirect from='*' to='/product' />
    </Router>
)