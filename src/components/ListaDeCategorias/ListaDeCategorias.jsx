import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias:[]};
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  } 
  _novasCategorias(categorias)
  {
    this.setState({...this.state, categorias});
  }

  _handleEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}
export default ListaDeCategorias;
