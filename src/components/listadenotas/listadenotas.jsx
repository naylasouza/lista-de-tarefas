import React, { Component } from "react"
import CardNota from "../cardnota/cardnota"
import "./style.css"

class ListaDeNotas extends Component {
    //mesmo eu nao colocando o contructor aqui ele entende que existe
    render() {
        return (
            <ul className="lista-notas" >
                {this.props.notas.map ((nota, index) => {
                    return (
                        <li className="lista-notas-item" key={index}>
                            <CardNota />
                        </li>
                    )
                })}

            </ul>)
    }

}
export default ListaDeNotas;