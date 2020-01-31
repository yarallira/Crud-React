import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="">
                    <i className="fa fa-calendar-check-o"></i>Cliente/Produto
                </a>
            </div>

            <div id='navbar' className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="Cliente">Cliente</a></li>
                    <li><a href="product">Produto</a></li>
                </ul>
            </div>
        </div>
    </nav >
)