import React, { Component } from 'react';
import ListaDeNotas from "./components/listadenotas/listadenotas"
import FormularioCadastro  from "./components/formulariocadastro/formulariocadastro"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />

      </section>
    );
  }
}

export default App;
