import * as React from "react";
import {Fragment} from "react";

import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputSwitch} from 'primereact/inputswitch';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import axios from "axios";

export class BetsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfoData: [],
            stateInputEmail: false,
            stateInputMercado: false,
            stateInputEvento: false,
            email: '',
            mercado: '',
            evento: '',
            checked: false,
            hide: true
        }

    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText onChange={this.getByEmail} disabled={this.state.stateInputEmail} placeholder="Email"/>
                    <InputText onChange={this.getByMercado} disabled={this.state.stateInputMercado}
                               placeholder="Mercado"/>
                    <InputText onChange={this.getByEvento} disabled={this.state.stateInputEvento} placeholder="Evento"/>
                    <Button onClick={this.viewFilterBets} label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <h5>Bloquear mercados</h5>
                    <InputSwitch checked={this.state.checked} onChange={this.showBlock}/>
                </div>
                <div hidden={this.state.hide}>
                    <InputText placeholder={"bloquear Id mercado"}/>
                    <Button label={"Bloquear"}/>


                </div>
                <div>
                    <DataTable value={this.state.userInfoData}>
                        <Column style={{width: '6%'}} field="ApuestaId" header="Apuesta"></Column>
                        <Column style={{width: '7%'}} field="MercadoOverUnder" header="Mercado"></Column>
                        <Column style={{width: '5%'}} field="TipoOverUnder" header="Tipo"></Column>
                        <Column style={{width: '5%'}} field="Cuota" header="Cuota"></Column>
                        <Column style={{width: '5%'}} field="DineroApostado" header="Dinero"></Column>
                        <Column style={{width: '18%'}} field="fecha" header="Fecha"></Column>
                        <Column style={{width: '10%'}} field="UsuarioId" header="Usuario"></Column>
                        <Column style={{width: '7%'}} field="MercadoId" header="Mercado"></Column>
                    </DataTable>
                </div>
            </Fragment>

        );
    }

    getByEmail = (emailInput) => {
        this.setState({email: emailInput.target.value},
            () => {
                if (this.state.email.length > 0) {
                    this.setState({stateInputMercado: true, stateInputEvento: true})
                } else {
                    this.setState({stateInputMercado: false, stateInputEvento: false})
                }
            }
        )
    }
    getByMercado = (mercadoInput) => {
        this.setState({mercado: mercadoInput.target.value},
            () => {
                if (this.state.mercado.length > 0) {
                    this.setState({stateInputEmail: true, stateInputEvento: true})
                } else {
                    this.setState({stateInputEmail: false, stateInputEvento: false})
                }
            }
        )
    }
    getByEvento = (eventoInput) => {
        this.setState({evento: eventoInput.target.value},
            () => {
                if (this.state.evento.length > 0) {
                    this.setState({stateInputEmail: true, stateInputMercado: true})
                } else {
                    this.setState({stateInputEmail: false, stateInputMercado: false})
                }
            }
        )
    }
    viewFilterBets = () => {
        if (this.state.email != '') {
            axios.get('https://localhost:44301/api/apuestas?email=' + this.state.email).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data});
                console.log('estoy en email');
            })
        }
        if (this.state.evento != '') {
            axios.get('https://localhost:44301/api/apuestas?evento=' + this.state.evento).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data});
            })
        }
        if (this.state.mercado) {
            axios.get('https://localhost:44301/api/apuestas?mercado=' + this.state.mercado).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data});
            })
        }
    }
    showBlock = () => {
        this.setState({checked: !this.state.checked},
            () => {
                if (this.state.checked === true) {
                    this.setState({hide: false});
                } else {
                    this.setState({hide: true});
                }
            })
    }
}
