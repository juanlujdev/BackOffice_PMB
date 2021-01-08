import * as React from "react";
import {Fragment} from "react";

import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import axios from "axios";


export class EventsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfoData: [],
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
                    <InputText onChange={this.getByDate} disabled={this.state.stateInputFecha} placeholder="____-__-__  __:__"/>
                    <Button onClick={this.viewFilterEvents} label="Buscar" icon="pi pi-check"/>
                </div>
                <div>
                    <DataTable value={this.state.userInfoData}>
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
    viewFilterEvents = () => {
        if (this.state.local != '') {
            axios.get('https://localhost:44301/api/eventos?local=' + this.state.local).then((resultRequest) => {
                this.setState({userInfoData: resultRequest.data});
            })
        }
        if (this.state.visitante != ''){
            axios.get('https://localhost:44301/api/eventos?visitante='+this.state.visitante).then((resultRequest)=> {
                this.setState({userInfoData: resultRequest.data});
            })
        }
        if (this.state.fecha !=''){
            axios.get('https://localhost:44301/api/eventos?fecha='+this.state.fecha).then((resultRequest)=>{
                this.setState({userInfoData: resultRequest.data});
            })
                .catch(function (error){
                    alert("Error"+error.message.toString())
                })
        }
    }
}
