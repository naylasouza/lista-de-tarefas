import React, { Component } from 'react';
import ListaDeNotas from "./components/listadenotas/listadenotas"
import FormularioCadastro  from "./components/formulariocadastro/formulariocadastro"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[]
    }
  }
  criarNota(titulo, texto){
    const novanota = {titulo,texto};
    //[...] spread operator é pegar cada um dos itens do array e passar como argumento)
    const novoarraynotas =[... this.state.notas,novanota]
    const novoestado = {
      notas:novoarraynotas
    }
    this.setState(novoestado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>

      </section>
    );
  }
}
//atributo state
export default App;
