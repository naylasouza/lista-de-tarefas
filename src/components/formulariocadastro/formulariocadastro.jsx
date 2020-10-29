import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props){
    //constructor espera o pai(super) para funcionar
    super(props)
    this.titulo="";
    this.texto="";
  }
  handlerMudancadetitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value
  }
  handlerMudancatexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value
  }
  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
  }
  
  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro-input"
          //preciso fala p/ evento p/associar o evento com o binds.. no caso o (this). dentro do react tem sempre que associar com o binds
          onChange={this.handlerMudancadetitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro-input"
          onChange={this.handlerMudancatexto.bind(this)}
        />
        <button className="form-cadastro-input form-cadastro-submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;