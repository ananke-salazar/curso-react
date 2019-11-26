import React, { Component } from 'react';
import MateriaParaLista from './MateriaParaLista';

class ListaDeMaterias extends Component {

    constructor() {
        super();

        this.state = {
            listaDeCursos: [],
            criterioDeOrdenamiento: "nota"
        }
    }

    render() {

        let listaDeMateriasEnHTML = [];
        let miListaDeMateriasOrdenadas;

        if (this.state.criterioDeOrdenamiento === "nombre") {
            miListaDeMateriasOrdenadas = this.obtenerListaDeMateriasOrdenadasPorNombre();
        }
        else {
            miListaDeMateriasOrdenadas = this.obtenerListaDeMateriasOrdenadasPorNota();
        }

        for (let i = 0; i < miListaDeMateriasOrdenadas.length; i++) {
            listaDeMateriasEnHTML.push(
                <MateriaParaLista materia=
                    {{
                        nota: miListaDeMateriasOrdenadas[i].nota,
                        nombre: miListaDeMateriasOrdenadas[i].nombre,
                        ciclo: miListaDeMateriasOrdenadas[i].ciclo
                    }}
                ></MateriaParaLista>
            );
        }


        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <p style={{ cursor: "pointer", textAlign: "center" }}
                        onClick={this.eventoDeClicParaOrdenarCursorPorNombre}>Nombre</p>
                    </div>

                    <div className="col-md-6">
                        <p style={{ cursor: "pointer", textAlign: "center" }}
                            onClick={this.eventoDeClicParaOrdenarCursorPorNota}>Nota</p>
                    </div>
                </div>
                <ul className="rm-list-borders list-group list-group-flush">
                    {listaDeMateriasEnHTML}
                </ul>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.setState({
            listaDeCursos: this.props.listaDeCursos
        });
    }


    obtenerListaDeMateriasOrdenadasPorNombre = () => {
        return this.state.listaDeCursos.sort((a, b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
    }

    obtenerListaDeMateriasOrdenadasPorNota = () => {
        return this.state.listaDeCursos.sort((a, b) => (a.nota < b.nota) ? 1 : ((b.nota < a.nota) ? -1 : 0));
    }

    eventoDeClicParaOrdenarCursorPorNombre = () => {
        this.setState({ criterioDeOrdenamiento: "nombre" });
    }

    eventoDeClicParaOrdenarCursorPorNota = () => {
        this.setState({ criterioDeOrdenamiento: "nota" });
    }

}

export default ListaDeMaterias;
