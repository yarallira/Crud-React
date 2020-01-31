import React, { Component } from 'react'
//import axios from 'axios'


export default class FormFiltroProduto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemNome: "",
            itemPreco: ""
        }

        this.onChangeNomeFiltro = this.onChangeNomeFiltro.bind(this)
        this.onClickFiltrarNome = this.onClickFiltrarNome.bind(this)



    }
    ///////////////////////////////////////////////////////
    onClickFiltrarNome(e) {
        e.preventDefault();

        if (!this.props.produto.nomeFiltro) {
            console.log("Necessário preencher dados no imput");
            return;
        }

        let resutadoFiltro = this.props.listaProdutos.filter((item) => {

            return item.name == this.props.produto.nomeFiltro
        });

        this.props.atualizarListaProdutos(resutadoFiltro)

    }


    onChangeNomeFiltro(e) {
        this.props.onChangeNomeFiltro(e.target.value)
    }

    render() {
        return (
            <div>
                <form className="filtroProduto">
                    <br />
                    <label>Nome:</label>
                    <input onChange={(e) => this.onChangeNomeFiltro(e)} type="filtarnome" id="filtarnome" nome="filtarnome" value={this.props.produto.nomeFiltro}></input>
                    <button onClick={(e) => this.onClickFiltrarNome(e)}> Filtrar </button>
                    <button>Pesquisar toda lista</button>
                    <br /> <br />
                </form>
            </div>
        )
    }
}
