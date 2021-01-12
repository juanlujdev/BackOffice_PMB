import * as React from "react";
import {Fragment} from "react";

import {SplitButton} from 'primereact/splitbutton';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
// import {InputSwitch} from 'primereact/inputswitch';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import axios from "axios";


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
            hide: true,
            deleteEmail: '',
            hide2: true,
            checked1: false,
            checked2: false,
            items: [
                {
                    label: 'Eliminar usuario',
                    icon: 'pi pi-trash',
                    command: (e) => {
                        this.setState({hide: !this.state.hide, hide2: true})
                    }
                },
                {
                    label: 'Restablecer clave',
                    icon: 'pi pi-user-edit',
                    command: (e) => {
                        this.setState({hide2: !this.state.hide2, hide: true})
                    }
                }
            ]
        }
        this.getInfoUser();
    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText style={{width: '15%'}} onChange={this.getByName} disabled={this.state.stateInputName}
                               placeholder="Nombre"/>
                    <InputText style={{width: '25%'}} onChange={this.getBySurname}
                               disabled={this.state.stateInputSurname}
                               placeholder="Apellidos"/>
                    <InputText onChange={this.getByEmail} disabled={this.state.stateInputEmail} placeholder="Email"/>
                    <Button onClick={this.viewFilterUser} label="Buscar" icon="pi pi-check"/>
                    <SplitButton style={{width: '15%'}} label="Filtrar" model={this.state.items} icon="pi pi-filter"/>
                </div>
                {/*<div>*/}
                {/*    <h5>Eliminar</h5>*/}
                {/*    <InputSwitch checked={this.state.checked1} onChange={this.showDelete}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h5>Restablecer clave</h5>*/}
                {/*    <InputSwitch checked={this.state.checked2} onChange={this.showChange}/>*/}
                {/*</div>*/}

                {/*con el value= guardo en el value lo que tiene en el input, y con el metodo getBynameDelete
                lo que hago es que deleteEmail sea igual al value para poder trabajarlo*/}
                <div hidden={this.state.hide}>
                    <InputText onChange={this.getByEmailDelete} value={this.state.deleteEmail} placeholder="Email"/>
                    <Button onClick={this.deleteUser} label="Eliminar"/>
                </div>
                <div hidden={this.state.hide2}>
                    <h5>Restablecer clave</h5>
                    <InputText placeholder="Email"/>
                    <InputText placeholder="Nueva clave"/>
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
    getByEmailDelete = (eventInput) => {
        this.setState({deleteEmail: eventInput.target.value})
    }
    deleteUser = () => {
        axios.delete('https://localhost:44301/api/usuarios?usuarioId=' + this.state.deleteEmail).then((resultRequest) => {
            this.setState({deleteEmail: ''});
            this.setState({userInfoData: resultRequest.data},
                () => {
                    this.getInfoUser();
                });
        })

    }
    //Revisar condigo porque no cambia los estados de los botones cuando los cambio
    showDelete = () => {
        this.setState({checked1: !this.state.checked1},
            () => {
                if (this.state.checked1 === true) {
                    this.setState({hide: false, hide2: true})
                    if (this.state.checked2 === true) {
                        this.setState({checked2: false})
                    }
                }
                //si no lo pongo no mq quita la visualizacion de eliminar cuando lo descklico
                if (this.state.checked1===false){
                    this.setState({hide:true})
                }
                if (this.state.checked2===true) {
                    this.setState({hide: true, hide2: false});
                    if (this.state.checked1 === true) {
                        this.setState({checked1: false});
                    }
                if (this.state.checked2===false){
                    this.setState({hide2:true});
                }
                }

            })
    }
    showChange = () => {
        this.setState({checked2: !this.state.checked2},
            () => {
                if (this.state.checked2 === true) {
                    this.setState({hide2: false, hide: true})
                } else {
                    this.setState({hide2: true, hide: true})
                }
            })
    }
}
