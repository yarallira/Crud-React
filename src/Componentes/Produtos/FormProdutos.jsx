import React, { Component } from 'react'
import axios from 'axios'

export default class FormProdutos extends Component {
    constructor(props) {
        super(props)

        this.onClickCadastro = this.onClickCadastro.bind(this)
        this.onClickSalvarAtualização = this.onClickSalvarAtualização.bind(this)

    }



    onClickCadastro(e) {
        e.preventDefault();
        if (!this.props.produto.nome) {
            console.log("Informe o nome do produto");
            return;
        }
        if (!this.props.produto.preco) {
            console.log("Informe o preço do produto");
            return;
        }

        let body = {
            name: this.props.produto.nome,
            price: this.props.produto.preco
        }

        axios.post("http://localhost:3001/product/", body).then(
            (res) => {
                console.log(res);
                axios.get("http://localhost:3001/product/").then((res) => {
                    this.props.atualizarListaProdutos(res.data)
                    console.log(this.state);
                    this.props.LimparRegistros()
                }).catch((error) => {
                    console.log(error);
                });
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )

    }

    onChangeNome(e) {
        this.props.onChangeNome(e.target.value)
    }

    onChangePrice(e) {
        this.props.onChangePrice(e.target.value)
    }


    onClickSalvarAtualização(e) {
        e.preventDefault();
        console.log(this.props.produto.id, "onClickSalvarAtualização clicado")
        let body = {
            name: this.props.produto.nome,
            price: this.props.produto.preco
        }

        axios.put(`http://localhost:3001/product/${this.props.produto.id}`, body).then(
            (res) => {
                console.log(res);
                axios.get("http://localhost:3001/product/").then((res) => {
                    this.props.atualizarListaProdutos(res.data)
                    console.log(this.state);
                    this.props.LimparRegistros()
                }).catch((error) => {
                    console.log(error);
                });
            }
        ).catch(
            (error) => {
                console.log(error, "Algo deu errado.")
            }
        )
    }



    render() {
        return (
            <div>
                <form className="produtos">
                    <label>Nome: </label>
                    <input onChange={(e) => this.onChangeNome(e)} type="nome" id="nome" nome="nome" value={this.props.produto.nome}></input>
                    <br /> <br />
                    <label>Preço: </label>
                    <input onChange={(e) => this.onChangePrice(e)} type="preco" id="preco" nome="preco" value={this.props.produto.preco}></input>
                    <br />  <br />  <br />
                    <button onClick={(e) => this.onClickCadastro(e)}>Confirmar cadastro</button>
                    <button onClick={(e) => this.onClickSalvarAtualização(e)} value={this.props.produto.id}>Salvar atualização</button>


                    <br />  <br />  <br />
                </form>
            </div>
        )
    }
}