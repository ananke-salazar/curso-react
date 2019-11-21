import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';

class InfoDePersona extends Component {
    render() {
        return (
            <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card-shadow-primary card-border mb-3 card">
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-dark">
                            <div class="menu-header-content">
                                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                                    <div class="avatar-icon"><img src="assets/images/avatars/6.jpg" alt="Avatar 5" /></div>
                                </div>
                                <div>
                                    <h5 class="menu-header-title">Isabelle Day</h5>
                                    <h6 class="menu-header-subtitle">Security Officer</h6>
                                </div>
                                <div class="menu-header-btn-pane pt-1">
                                    <button class="btn-icon btn btn-warning btn-sm">View Complete Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3">
                        <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Lista de Materias</h6>
                        <ListaDeMaterias listaDeCursos={this.props.persona.listaDeCursosTomados}></ListaDeMaterias>
                    </div>
                    <div class="text-center d-block card-footer">
                        <button class="btn btn-info">View Details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoDePersona;
