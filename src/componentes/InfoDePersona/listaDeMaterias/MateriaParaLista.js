import React, { Component } from 'react';

class MateriaParaLista extends Component {

    render() {
        return (
            <li className="list-group-item">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">

                        <div className="widget-content-left">
                            <div className="widget-heading">{this.props.materia.nombre}</div>
                            <div className="widget-subheading">{this.props.materia.ciclo}</div>
                        </div>
                        <div className="widget-content-right">
                            <div className="font-size-xlg text-muted">
                                {this.obtenerTextoConColorSegunNota()}
                                {this.obtenerFlechaSegunNotaDefinitiva()}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    obtenerTextoConColorSegunNota = () => {

        if (this.props.materia.nota < 3) {
            return (
                <span style={{ color: "red" }}>{this.props.materia.nota.toFixed(1)}
                </span>)
        }
        else {
            return (<span style={{ color: "black" }}>{this.props.materia.nota.toFixed(1)}
            </span>);
        }
    }

    obtenerFlechaSegunNotaDefinitiva = () => {
        if (this.props.materia.nota >= 3.0) {
            return (<small className="text-success pl-2" >
                <i className="fa fa-angle-up ">
                </i>
            </small>);
        }
        else {
            return (<small className="text-danger pl-2" >
                <i className="fa fa-angle-down ">
                </i>
            </small>);
        }

    }
}

export default MateriaParaLista;