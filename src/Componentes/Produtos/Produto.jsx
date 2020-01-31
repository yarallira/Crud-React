import React, { Component } from 'react';
import ListaProdutos from './ListaProdutos'
import FormProdutos from './FormProdutos'
import FormFiltroProduto from './FormFiltroProduto'
import Menu from '../../template/menu'
//import '../Clientes/css.css'

export default class Produto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            produto: {
                id: "",
                nome: "",
                preco: "",
                nomeFiltro: "",
                nomeFiltrado: ""
            }
        }
        this.atualizarListaProdutos = this.atualizarListaProdutos.bind(this);
        this.EditarProduto = this.EditarProduto.bind(this);
        this.LimparRegistros = this.LimparRegistros.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeNomeFiltro = this.onChangeNomeFiltro.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this);
        this.ResultadoConsulta = this.ResultadoConsulta.bind(this)
    }

    atualizarListaProdutos(listaProdutos) {
        console.log('listaprodutos', listaProdutos);
        this.setState({
            ...this.state,
            produtos: listaProdutos
        })
    }

    EditarProduto(produto) {
        console.log(produto, "Botão clicado");
        this.setState({
            ...this.state,
            produto: {
                ...this.state.produto,
                id: produto._id,
                nome: produto.name,
                preco: produto.price
            }
        })
    }

    ResultadoConsulta(produto) {
        console.log(produto, "Botão clicado");
        this.setState({
            ...this.state,
            produto: {
                ...this.state.produto,
                nomeFiltrado: produto.name
            }
        })
    }

    LimparRegistros() {
        console.log("Limpar registros chamado")
        this.setState({
            ...this.state,
            produto: {
                ...this.state.produto,
                id: "",
                nome: "",
                preco: "",
                nomeFiltro: ""
            }
        })
    }


    onChangeNome(nome) {
        console.log('nome', nome)
        this.setState(
            {
                ...this.state,
                produto: {
                    ...this.state.produto,
                    nome: nome
                }
            }, console.log(this.state, 'state app.js')
        )
    }

    onChangeNomeFiltro(nome) {
        //console.log("Nome filtro", nome)
        this.setState(
            {
                ...this.state,
                produto: {
                    ...this.state.produto,
                    nomeFiltro: nome
                }
            }, //console.log(this.state,"Esta dentro da callback da function onChangeNomeFiltro")
        )
    }

    onChangePrice(preco) {
        this.setState(
            {
                ...this.state,
                produto: {
                    ...this.state.produto,
                    preco: preco
                }
            }
        )
    }

    render() {
        return (
            <div >
                <Menu />
                <FormProdutos atualizarListaProdutos={this.atualizarListaProdutos} produto={this.state.produto} onChangeNome={this.onChangeNome} onChangePrice={this.onChangePrice} LimparRegistros={this.LimparRegistros} />
                <FormFiltroProduto atualizarListaProdutos={this.atualizarListaProdutos} listaProdutos={this.state.produtos} produto={this.state.produto} onChangeNomeFiltro={this.onChangeNomeFiltro} />
                <ListaProdutos atualizarListaProdutos={this.atualizarListaProdutos} listaProdutos={this.state.produtos} editarproduto={this.EditarProduto} />
            </div>
        );
    }
}

