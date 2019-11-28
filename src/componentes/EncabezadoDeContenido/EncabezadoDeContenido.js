import React, { Component } from 'react';

class EncabezadoDeContenido extends Component {

    render() {
        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="pe-7s-science icon-gradient bg-happy-itmeo">
                            </i>
                        </div>
                        <div>{this.props.titulo}
                            <div className="page-title-subheading">
                                {this.props.subtitulo}
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        <button type="button" data-toggle="tooltip" title="" data-placement="bottom"
                            className="btn-shadow mr-3 btn btn-dark" data-original-title="Ordenar por nombre"
                            onClick={() => {
                                this.props.funcionDeOrdenamiento("nombre");
                            }}>
                            <i className="pe-7s-edit"></i>
                        </button>

                        <button type="button" data-toggle="tooltip" title="" data-placement="bottom"
                            className="btn-shadow mr-3 btn btn-dark" data-original-title="Ordenar por promedio"
                            onClick={() => {
                                this.props.funcionDeOrdenamiento("descripcion");
                            }}>
                            <i className="pe-7s-medal"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EncabezadoDeContenido;