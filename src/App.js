import React, { Component } from 'react';
import ListaDeNotas from "./components/listadenotas/listadenotas"
import FormularioCadastro  from "./components/formulariocadastro/formulariocadastro"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.notas = []
    this.state = {}
  }
  criarNota(titulo, texto){
    const novanota = {titulo,texto};
    this.notas.push(novanota);
    this.setState({
      notas:this.notas
    })
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>

      </section>
    );
  }
}
//atributo state
export default App;
