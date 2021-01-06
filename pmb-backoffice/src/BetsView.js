import * as React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Fragment} from "react";

export class BetsView extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText placeholder="Email"/>
                    <InputText placeholder="Mercado"/>
                    <InputText placeholder="Evento"/>
                    <Button label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <DataTable>
                        <Column field="ApuestaID" header="ApuestaID"></Column>
                        <Column field="MercadoOverUnder" header="Mercado"></Column>
                        <Column field="TipoOverUnder" header="Tipo"></Column>
                        <Column field="Cuota" header="Cuota"></Column>
                        <Column field="DineroApostado" header="Dinero"></Column>
                        <Column field="Fecha" header="Fecha"></Column>
                        <Column field="UsuarioId" header="Usuario"></Column>
                        <Column field="MercadoId" header="Mercado"></Column>
                    </DataTable>
                </div>
            </Fragment>

        );
    }
}
