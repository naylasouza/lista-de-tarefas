import React, { Component } from 'react';
import "./style.css"

class CardNota extends Component {

    render() { 
        return ( 
            <section className="Card-nota">
                    <header className="card-notas-cabecalho">
                        <h3 className="card-notas-titulo">Titulo</h3>
                    </header>
                    <p className="card-notas-texto"> Escreva a sua nota</p>
                </section>
         );
    }
}
 
export default CardNota;