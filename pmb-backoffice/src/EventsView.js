import * as React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Fragment} from "react";

export class EventsView extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText placeholder="Titulo"/>
                    <InputText placeholder="Fecha"/>
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
}
