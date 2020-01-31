import React, { Component } from 'react'
import axios from 'axios'

export default class ListaProdutos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            price: ""
        }
    }

    onChageDelete(e) {
        this.setState(
            {
                id: e.target.value
            }
        )
    }


    onClickDelete(produtoId) {

        axios.delete(`http://localhost:3002/product/${produtoId}`).then(
            (res) => {
                console.log(res);
                axios.get("http://localhost:3002/product/").then((res) => {
                    console.log(res)
                    //let ArrayTeste = res.data
                    //debugger
                    this.props.atualizarListaProdutos(res.data)
                    console.log(this.state);
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



    render() {
        return (
            <div>
                {this.props.listaProdutos.map((produto) => {
                    return <li>Id: {produto._id}--------------Nome: {produto.name}--------------Preço: {produto.price}  &nbsp;&nbsp;
                    <button onClick={() => this.onClickDelete(produto._id)} >Excluir registro</button>
                        <button onClick={(e) => this.props.editarproduto(produto)} >Editar</button>
                    </li>
                })}




            </div>
        )
    }
}