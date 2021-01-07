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
            userInfoData: [],
            name: '',
            stateInputName: false,
            stateInputSurname: false,
            stateInputEmail: false,
        }
        this.getInfoUser();
    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText onChange={this.getByName} disabled={this.state.stateInputName} placeholder="Nombre"/>
                    <InputText onChange={this.getBySurname} disabled={this.state.stateInputSurname}
                               placeholder="Apellidos"/>
                    <InputText onChange={this.getByEmail} disabled={this.state.stateInputEmail} placeholder="Email"/>
                    <Button onClick={this.viewFilterUser} label="Buscar" icon="pi pi-check"/>
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
    viewFilterUser = () => {
        if (this.name != '') {
            axios.get('https://localhost:44301/api/usuarios?name=' + this.state.name).then((resultRequest) =>
            {
                this.setState({userInfoData: resultRequest.data})
            })
        }
    }
    getByName = (eventInput) => {
        this.setState({name: eventInput.target.value},
            () => {
                if (this.state.name.length > 0) {
                    this.setState({stateInputEmail: true, stateInputSurname: true});
                } else {
                    this.setState({stateInputEmail: false, stateInputSurname: false});
                    this.getInfoUser();
                }
            })

    }
    getByEmail = (eventInput) => {
        this.setState({name: eventInput.target.value},
            () => {
                if (this.state.name.length > 0) {
                    this.setState({stateInputName: true, stateInputSurname: true});
                } else {
                    this.setState({stateInputName: false, stateInputSurname: false});
                    this.getInfoUser();
                }
            })
    }
    getBySurname = (eventInput) => {
        this.setState({name: eventInput.target.value},
            () => {
                if (this.state.name.length > 0) {
                    this.setState({stateInputEmail: true, stateInputName: true});
                } else {
                    this.setState({stateInputEmail: false, stateInputName: false});
                    this.getInfoUser();
                }
            })
    }
}
