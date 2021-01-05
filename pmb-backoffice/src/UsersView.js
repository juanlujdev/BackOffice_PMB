import * as React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Fragment} from "react";

export class UsersView extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText placeholder="Nombre"/>
                    <InputText placeholder="Apellidos"/>
                    <InputText placeholder="Email"/>
                    <Button label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <DataTable>
                        <Column field="EmailId" header="EmailId"></Column>
                        <Column field="Nombre" header="Nombre"></Column>
                        <Column field="Apellidos" header="Apellidos"></Column>
                        <Column field="Edad" header="Edad"></Column>
                    </DataTable>
                </div>
            </Fragment>

        );
    }
}
