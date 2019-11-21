import React, { Component } from 'react';
import MateriaParaLista from './MateriaParaLista';

class ListaDeMaterias extends Component {

    constructor() {
        super();

        this.state = {
            labelDeNota: ""
        }
    }

    render() {
        return (

            <ul class="rm-list-borders list-group list-group-flush">
                <MateriaParaLista materia={{ nota: 3.1, nombre: "React JS", ciclo: "Ciclo V" }}></MateriaParaLista>
                <MateriaParaLista materia={{ nota: 1.5, nombre: ".NET", ciclo: "Ciclo IV" }}></MateriaParaLista>
            </ul>
        );
    }


}

export default ListaDeMaterias;
