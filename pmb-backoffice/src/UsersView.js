import * as React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Fragment} from "react";
import axios from "axios";

export class UsersView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfoData: []
        }
        this.getInfoUser();
    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText  placeholder="Nombre"/>
                    <InputText placeholder="Apellidos"/>
                    <InputText placeholder="Email"/>
                    <Button label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <DataTable value={this.state.userInfoData}>
                        <Column field="UsuarioId" header="EmailId"></Column>
                        <Column field="Nombre" header="Nombre"></Column>
                        <Column field="Apellido" header="Apellidos"></Column>
                        <Column field="edad" header="Edad"></Column>
                    </DataTable>
                </div>
            </Fragment>

        );
    }

    /*metodo que traigo con axios los datos de la api de usuarios, me lo guarda en resultRequest
     y me actualizas con el setState en userInfoData que sea igual a resultRequest*/
    getInfoUser = () => {
        axios.get('https://localhost:44301/api/usuarios').then((resultRequest) => {
            this.setState({userInfoData: resultRequest.data});
            console.log(this.state.userInfoData);
        })
    }
}
