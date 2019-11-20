import React, { Component } from 'react';

class InfoDePersona extends Component {

    constructor() {
        super();

        this.state = {
            labelDeNota: ""
        }
    }

    render() {

        let miArrayDeCursosEnHTML = [];
        for (let i = 0; i < this.props.persona.listaDeCursosAprobados.length; i++) {
            miArrayDeCursosEnHTML
                .push(
                    <option value={this.props.persona.listaDeCursosAprobados[i].nombre}
                    key={"OpcionDeSeleccion"+i}>
                        {this.props.persona.listaDeCursosAprobados[i].nombre}
                    </option>);
        }


        return (
            <div>
                <h1>{this.props.persona.nombre}</h1>
                <h3>{this.props.persona.rol + ": " + this.props.persona.descripcion}</h3>
                <h2>Visualizador de notas: </h2>

                <select name="select" onChange={this.setearElLabelDeLaNota}>
                    {miArrayDeCursosEnHTML}
                </select>

                <a style={{ marginLeft: 10 }}>{this.state.labelDeNota}</a>
            </div>
        );
    }

    setearElLabelDeLaNota = (e) => {
        let nombreDeCursoTarget = e.target.value;
        let notaTarget;

        for (let i = 0; i < this.props.persona.listaDeCursosAprobados.length; i++) {
            if (this.props.persona.listaDeCursosAprobados[i].nombre === nombreDeCursoTarget) {
                notaTarget = this.props.persona.listaDeCursosAprobados[i].nota;
                break;
            }
        }

        this.setState({
            labelDeNota: "Nota: " + notaTarget
        });
    }
}

export default InfoDePersona;
