import React , { Component } from 'react'
import axios from 'axios'


export default class FormIncluirClientes extends Component {
    constructor(props){
        super(props)

        this.onChangeNomeFiltro = this.onChangeNomeFiltro.bind(this)
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeRg = this.onChangeRg.bind(this)
        this.onChangeCpf = this.onChangeCpf.bind(this)
        this.onChangeIdade = this.onChangeIdade.bind(this)
        this.onChangeTelefone = this.onChangeTelefone.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onClickSalvarAtualização = this.onClickSalvarAtualização.bind(this)
    }

    onChangeNomeFiltro(e){
        this.props.onChangeNomeFiltro(e.target.value)
    }

    onChangeNome(e){
        this.props.onChangeNome(e.target.value)
    }

    onChangeRg(e){
        this.props.onChangeRg(e.target.value)
    }

    onChangeCpf(e){
        this.props.onChangeCpf(e.target.value)
    }

    onChangeIdade(e){
        this.props.onChangeIdade(e.target.value)
    }

    onChangeTelefone(e){
        this.props.onChangeTelefone(e.target.value)
    }

    onChangeEmail(e){
        this.props.onChangeEmail(e.target.value)
    }

    onClickCadastrar(e){
        e.preventDefault();

        let body = {
            nome: this.props.cliente.nome,
            rg: this.props.cliente.rg,
            cpf: this.props.cliente.cpf,
            idade: this.props.cliente.idade,
            telefone: this.props.cliente.telefone,
            email: this.props.cliente.email
        }

        axios.post("http://localhost:3001/Cliente/", body).then((res) => {
            console.log(res);
            axios.get("http://localhost:3001/Cliente/").then((res)=>{
                this.props.atualizarListaClientes(res.data)
                console.log(this.state)
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })

    }

    onClickSalvarAtualização(e){
        e.preventDefault();
        console.log(this.props.cliente.id)
        let body ={
            nome: this.props.cliente.nome,
            rg: this.props.cliente.rg,
            cpf: this.props.cliente.cpf,
            idade: this.props.cliente.idade,
            telefone: this.props.cliente.telefone,
            email: this.props.cliente.email
        }

        axios.put(`http://localhost:3001/Cliente/${this.props.cliente.id}`, body).then((res) => {
        console.log(res)
        axios.get("http://localhost:3001/Cliente/").then((res) => {
            this.props.atualizarListaClientes(res.data)
        }).catch((error) => {
            console.log(error)
        })

        }).catch((error) => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                 <form className="clientes">
                    <h1 className="dadosclientes">Dados do cliente</h1>
                    <br/> <br/>
                    <label>Nome:</label>
                    <input onChange={(e) => this.onChangeNome(e)} value={this.props.cliente.nome}></input>
                    <br/>
                    <label>RG:</label>
                    <input onChange={(e) => this.onChangeRg(e)} value={this.props.cliente.rg}></input>
                    <br/>
                    <label>CPF:</label>
                    <input onChange={(e) => this.onChangeCpf(e)} value={this.props.cliente.cpf}></input>
                    <br/>
                    <label>Idade:</label>
                    <input onChange={(e) => this.onChangeIdade(e)} value={this.props.cliente.idade}></input>
                    <br/>
                    <label>Telefone:</label>
                    <input onChange={(e) => this.onChangeTelefone(e)} value={this.props.cliente.telefone}></input>
                    <br/>
                    <label>E-mail:</label>
                    <input onChange={(e) => this.onChangeEmail(e)} value={this.props.cliente.email}></input>
                    <br/> <br/>
                    <button onClick={(e) => this.onClickCadastrar(e)}>Cadastrar</button>
                    <button onClick={(e) => this.onClickSalvarAtualização(e)}>Salvar alteração</button>
                    <br/> <br/> <br/>
                </form>
            </div>
        )
    }
}