import React, { Component } from 'react'
import axios from 'axios'

export default class ListaClientes extends Component {

    onClickDeletar(idCliente) {
        axios.delete(`http://localhost:3001/Cliente/${idCliente}`).then((res) => {
            console.log("Cliente removido com sucesso!", res);
            axios.get("http://localhost:3001/Cliente/").then((res) => {
                this.props.atualizarListaClientes(res.data)
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {this.props.listaClientes.map((cliente, i) => {
                    return <li key={i}>{cliente.nome}-------{cliente.rg}-------{cliente.cpf}-------{cliente.idade}-------{cliente.telefone}-------{cliente.email} &nbsp;&nbsp;
                        <button onClick={(e) => this.onClickDeletar(cliente._id)}>Excluir</button>
                        <button onClick={(e) => this.props.onClickEditar(cliente)}>Editar</button>
                    </li>
                })}
            </div>

        )
    }


}
