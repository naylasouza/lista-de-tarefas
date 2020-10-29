import React, { Component } from 'react';
import "./style.css"

class CardNota extends Component {

    render() {
        return (
            <section className="Card-nota">
                <header className="card-notas-cabecalho">
                    <h3 className="card-notas-titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-notas-texto"> {this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;