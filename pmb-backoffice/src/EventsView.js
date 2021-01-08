import * as React from "react";
import {Fragment} from "react";

import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export class EventsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stateInputLocal: false,
            stateInputVisitante: false,
            stateInputFecha: false,
            local: '',
            visitante: '',
            fecha: ''
        }
    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText onChange={this.getByLocal} disabled={this.state.stateInputLocal} placeholder="Local"/>
                    <InputText onChange={this.getByVisitante} disabled={this.state.stateInputVisitante}
                               placeholder="Visitante"/>
                    <InputText onChange={this.getByDate} disabled={this.state.stateInputFecha} placeholder="Fecha"/>
                    <Button label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <DataTable>
                        <Column field="EventoId" header="EventoId"></Column>
                        <Column field="EquipoLocal" header="E.Local"></Column>
                        <Column field="EquipoVisitante" header="E.Visitante"></Column>
                        <Column field="Fecha" header="Fecha"></Column>
                    </DataTable>
                </div>
            </Fragment>

        );
    }

    getByLocal = (localInput) => {
        this.setState({local: localInput.target.value},
            () => {
                if (this.state.local.length > 0) {
                    this.setState({stateInputVisitante: true, stateInputFecha: true})
                } else {
                    this.setState({stateInputVisitante: false, stateInputFecha: false})
                }
            }
        );
    }
    getByVisitante = (visitantInput) => {
        this.setState({visitante: visitantInput.target.value},
            () => {
                if (this.state.visitante.length > 0) {
                    this.setState({stateInputLocal: true, stateInputFecha: true})
                } else {
                    this.setState({stateInputLocal: false, stateInputFecha: false})
                }
            }
        );
    }
    getByDate = (dateInput) => {
        this.setState({fecha: dateInput.target.value},
            () => {
                if (this.state.fecha.length > 0) {
                    this.setState({stateInputLocal: true, stateInputVisitante: true});
                } else {
                    this.setState({stateInputLocal: false, stateInputVisitante: false});
                }
            }
        )
    }
}
