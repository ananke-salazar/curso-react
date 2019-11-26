import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';
import MateriaParaLista from './listaDeMaterias/MateriaParaLista';

class InfoDePersona extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-6 col-xl-4">
                <div className="card-shadow-primary card-border mb-3 card">
                    <div className="dropdown-menu-header">
                        <div className="dropdown-menu-header-inner bg-dark">
                            <div className="menu-header-content">
                                <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                                    <div className="avatar-icon"><img src="assets/images/avatars/6.jpg" alt="Avatar 5" /></div>
                                </div>
                                <div>
                                    <h5 className="menu-header-title">Isabelle Day</h5>
                                    <h6 className="menu-header-subtitle">Security Officer</h6>
                                </div>
                                <div className="menu-header-btn-pane pt-1">
                                    <button className="btn-icon btn btn-warning btn-sm">View Complete Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Lista de Materias</h6>
                        <ListaDeMaterias listaDeCursos={this.props.persona.listaDeCursosTomados}></ListaDeMaterias>
                    </div>
                    <div className="text-center d-block card-footer">
                        {this.obtenerInformacionDePromedio()}
                    </div>
                </div>
            </div>
        );
    }

    calcularPromedioDelEstudiante = () => {
        let cursos = this.props.persona.listaDeCursosTomados;
        let suma = 0;

        for (let i = 0; i < cursos.length; i++) {
            suma += cursos[i].nota;
        }

        return suma / cursos.length;
    }

    obtenerInformacionDePromedio = () => {
        return (
            <ul className="rm-list-borders list-group list-group-flush">
                <MateriaParaLista materia={{
                    nombre: "Promedio",
                    nota: this.calcularPromedioDelEstudiante()
                }}></MateriaParaLista>
            </ul>
        );
    }
}

export default InfoDePersona;
