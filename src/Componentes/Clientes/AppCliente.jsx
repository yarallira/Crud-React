import React, { Component } from 'react';
import axios from 'axios'
import ListaClintes from './ListaClientes'
import FormIncluirClientes from './FormIncluirClientes'

export default class AppCliente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientes: [],
      cliente: {
        id: "",
        nome: "",
        rg: "",
        cpf: "",
        idade: "",
        telefone: "",
        email: "",
        nomeFiltro: ""

      }
    }
    this.componentWillMount = this.componentWillMount.bind(this)
    this.atualizarListaClientes = this.atualizarListaClientes.bind(this)
    this.onChangeNomeFiltro = this.onChangeNomeFiltro.bind(this)
    this.onChangeNome = this.onChangeNome.bind(this)
    this.onChangeRg = this.onChangeRg.bind(this)
    this.onChangeCpf = this.onChangeCpf.bind(this)
    this.onChangeIdade = this.onChangeIdade.bind(this)
    this.onChangeTelefone = this.onChangeTelefone.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onClickEditar = this.onClickEditar.bind(this)
  }

  componentWillMount() {
    axios.get("http://localhost:3001/Cliente/").then((res) => {
      this.setState({ clientes: res.data })
      console.log(this.state);
    }).catch((error) => {
      console.log(error);
    });
  }

  atualizarListaClientes(listaProdutos){
    this.setState({
      ...this.state,
      clientes: listaProdutos
    })
  }

  onClickEditar(cliente){
    this.setState({
      ...this.state,
      cliente:{
        ...this.state.cliente,
        id: cliente._id,
        nome: cliente.nome,
        rg: cliente.rg,
        cpf: cliente.cpf,
        idade: cliente.idade,
        telefone: cliente.telefone,
        email: cliente.email
      }
      }
    )
  }

  onChangeNomeFiltro(nomeFiltro){
    this.setState({
      ...this.state,
      cliente:{
        ...this.state.cliente,
        nomeFiltro: nomeFiltro
      }
    })
  }

  onChangeNome(nome){
    console.log("nome", nome);
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        nome:nome
      }
    }, console.log(this.state))
  }

  onChangeRg(rg){
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        rg: rg
      }
    })
  }

  onChangeCpf(cpf){
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        cpf: cpf
      }
    })

  }

  onChangeIdade(idade){
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        idade: idade
      }
    })
  }

  onChangeTelefone(telefone){
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        telefone: telefone
      }
    })
    
  }

  onChangeEmail(email){
    this.setState({
      ...this.state,
      cliente: {
        ...this.state.cliente,
        email: email
      }
    })
    
  }

  render() {
    return (
      <div >
        <FormIncluirClientes cliente={this.state.cliente} atualizarListaClientes={this.atualizarListaClientes} onChangeNome={this.onChangeNome} onChangeRg={this.onChangeRg}
         onChangeCpf={this.onChangeCpf} onChangeIdade={this.onChangeIdade} onChangeTelefone={this.onChangeTelefone} onChangeEmail={this.onChangeEmail}/>
        <ListaClintes cliente={this.state.cliente} atualizarListaClientes={this.atualizarListaClientes} listaClientes={this.state.clientes} onClickEditar={this.onClickEditar}/>
      </div>
    );
  }
}

