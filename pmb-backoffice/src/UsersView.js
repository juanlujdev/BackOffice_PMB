import * as React from "react";
import {Fragment} from "react";

import {SplitButton} from 'primereact/splitbutton';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

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
            changeEmail: '',
            changeOldPsswrd: '',
            changeNewPsswrd: '',
            changeNewPsswrd2: '',
            changeByNewPsswrd2: '',
            items: [
                {
                    label: 'Eliminar usuario',
                    icon: 'pi pi-trash',
                    command: (e) => {
                        this.setState({hide: !this.state.hide, hide2: true});
                    }
                },
                {
                    label: 'Restablecer clave',
                    icon: 'pi pi-user-edit',
                    command: (e) => {
                        this.setState({hide2: !this.state.hide2, hide: true});
                    }
                }
            ]
        }
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
                <div style={{paddingTop: 10}} hidden={this.state.hide}>
                    <InputText onChange={this.getByEmailDelete} value={this.state.deleteEmail} placeholder="Email"/>
                    <Button style={{backgroundColor: "#f06e4e"}} onClick={this.deleteUser} label="Eliminar"/>
                </div>
                <div style={{paddingTop: 10}} hidden={this.state.hide2}>
                    <InputText style={{width: '20%'}} value={this.state.changeEmail} onChange={this.changeById}
                               placeholder="Email"/>
                    <InputText style={{width: '20%'}} value={this.state.changeOldPsswrd}
                               onChange={this.changeByOldPsswrd}
                               placeholder="Password antiguo"/>
                    <InputText style={{width: '20%'}} value={this.state.changeNewPsswrd}
                               onChange={this.changeByNewPsswrd}
                               placeholder="Nuevo password"/>
                    <InputText style={{width: '20%'}} value={this.state.changeNewPsswrd2}
                               onChange={this.changeByNewPsswrd2}
                               placeholder="Confirmar password"/>
                    <Button style={{width: '15%'}} style={{backgroundColor: "#dcd367"}} onClick={this.changePasswrd}
                            label="Cambiar"/>
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

    componentDidMount() {
        this.getInfoUser();
    }

    getInfoUser = () => {
        axios.get('https://localhost:44301/api/usuarios').then((resultRequest) => {
            this.setState({userInfoData: resultRequest.data});
        })
    }
    viewFilterUser = () => {
        if (this.state.name !== '') {
            axios.get('https://localhost:44301/api/usuarios?name=' + this.state.name).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("Usuario no encontrado");
                }

            }).catch(function (error) {
                alert("Error" + error.message.toString());
            });
        }
        if (this.state.surname !== '') {
            axios.get('https://localhost:44301/api/usuarios?surname=' + this.state.surname).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("Apellido no encontrado");
                }

            }).catch(function (error) {
                alert("Error" + error.message.toString());
            });
        }
        if (this.state.email !== '') {
            console.log('El mail es: ' + this.state.email)
            axios.get('https://localhost:44301/api/usuarios?email=' + this.state.email).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("Email no encontrado");
                }

            }).catch(function (error) {
                alert("Error" + error.message.toString());
            });
        }
    }
    changePasswrd = () => {
        axios.post('https://localhost:44301/api/Account/ChangePasswordApi?email=' + this.state.changeEmail,
            {
                OldPassword: this.state.changeOldPsswrd,
                NewPassword: this.state.changeNewPsswrd,
                ConfirmPassword: this.state.changeNewPsswrd2
            }
        ).then();
        alert("Password changed");
        this.setState({changeEmail: '', changeOldPsswrd: '', changeNewPsswrd: '', changeNewPsswrd2: ''});
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
        this.setState({deleteEmail: eventInput.target.value});
    }
    changeById = (eventInput) => {
        this.setState({changeEmail: eventInput.target.value});
    }
    changeByOldPsswrd = (eventInput) => {
        this.setState({changeOldPsswrd: eventInput.target.value});
    }
    changeByNewPsswrd = (eventInput) => {
        this.setState({changeNewPsswrd: eventInput.target.value});
    }
    changeByNewPsswrd2 = (eventInput) => {
        this.setState({changeNewPsswrd2: eventInput.target.value})
    }
    deleteUser = () => {
        axios.delete('https://localhost:44301/api/usuarios?usuarioId=' + this.state.deleteEmail).then((resultRequest) => {
            if (resultRequest.data === 'fail') {
                alert("Email no encontrado");
            } else {
                this.setState({deleteEmail: ''});
                this.setState({userInfoData: resultRequest.data},
                    () => {
                        this.getInfoUser();
                    });
                alert("Email eliminado");
            }
        }).catch(function (error) {
            alert("Error" + error.message.toString());
        });
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
                if (this.state.checked1 === false) {
                    this.setState({hide: true})
                }
                if (this.state.checked2 === true) {
                    this.setState({hide: true, hide2: false});
                    if (this.state.checked1 === true) {
                        this.setState({checked1: false});
                    }
                    if (this.state.checked2 === false) {
                        this.setState({hide2: true});
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
