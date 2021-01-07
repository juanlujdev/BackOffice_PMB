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
import {SplitButton} from 'primereact/splitbutton';

export class UsersView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfoData: [],
            name: '',
            surname: '',
            email: '',
            stateInputName: false,
            stateInputSurname: false,
            stateInputEmail: false,
            hide:true,
            items: [
                {
                    label: 'Eliminar usuario',
                    icon: 'pi pi-trash',
                    command: (e) => {this.setState({hide: !this.state.hide})
                    }
                },
                {
                    label: 'Restablecer clave',
                    icon: 'pi pi-user-edit'
                }
            ]
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
                    <SplitButton label="Filtrar" model={this.state.items}/>
                </div>
                <div hidden={this.state.hide}>
                    <h5>Eliminar usuario</h5>
                    <InputText placeholder="Email"/>
                    <Button label="Eliminar"/>
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
        if (this.state.name != '') {
            axios.get('https://localhost:44301/api/usuarios?name=' + this.state.name).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data})
            })
        }
        if (this.state.surname != '') {
            axios.get('https://localhost:44301/api/usuarios?surname=' + this.state.surname).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data})
            })
        }
        if (this.state.email != '') {
            console.log('El mail es: ' + this.state.email)
            axios.get('https://localhost:44301/api/usuarios?email=' + this.state.email).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data})
                console.log(this.state.userInfoData);
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
        this.setState({email: eventInput.target.value},
            () => {
                if (this.state.email.length > 0) {
                    this.setState({stateInputName: true, stateInputSurname: true});
                } else {
                    this.setState({stateInputName: false, stateInputSurname: false});
                    this.getInfoUser();
                }
            })
    }
    getBySurname = (eventInput) => {
        this.setState({surname: eventInput.target.value},
            () => {
                if (this.state.surname.length > 0) {
                    this.setState({stateInputEmail: true, stateInputName: true});
                } else {
                    this.setState({stateInputEmail: false, stateInputName: false});
                    this.getInfoUser();
                }
            })
    }
}
