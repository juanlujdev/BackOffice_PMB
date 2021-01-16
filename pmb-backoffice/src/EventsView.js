import * as React from "react";
import {Fragment} from "react";

import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {SplitButton} from "primereact/splitbutton";

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
            fecha: '',
            hide: true,
            hide2: true,
            hide3: true,
            deleteEvent: '',
            putById: '',
            putByDate: '',
            postByLocal: '',
            postByVisitor: '',
            items: [
                {
                    label: 'Eliminar evento',
                    icon: 'pi pi-trash',
                    command: (e) => {
                        this.setState({hide: !this.state.hide, hide2: true, hide3: true})
                    }
                },
                {
                    label: 'Modificar evento',
                    icon: 'pi pi-pencil',
                    command: (e) => {
                        this.setState({hide2: !this.state.hide2, hide: true, hide3: true, putByDate: ''})
                    }
                },
                {
                    label: 'Alta eventos',
                    icon: 'pi pi-plus',
                    command: (e) => {
                        this.setState({hide3: !this.state.hide3, hide: true, hide2: true, putByDate: ''})
                    }
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <div className={'fiter'}>
                    <InputText style={{width: '20%'}} value={this.state.local} onChange={this.getByLocal}
                               disabled={this.state.stateInputLocal}
                               placeholder="Local"/>
                    <InputText style={{width: '20%'}} value={this.state.visitante} onChange={this.getByVisitante}
                               disabled={this.state.stateInputVisitante}
                               placeholder="Visitante"/>
                    <InputText style={{width: '25%'}} value={this.state.fecha} onChange={this.getByDate}
                               disabled={this.state.stateInputFecha}
                               placeholder="aaaa-MM-dd  hh:mm"/>
                    <Button onClick={this.viewFilterEvents} label="Buscar" icon="pi pi-check"/>
                    <SplitButton style={{width: '15%'}} label="Filtrar" model={this.state.items} icon="pi pi-filter"/>
                </div>
                <div style={{paddingTop: 10}} hidden={this.state.hide}>
                    <InputText onChange={this.getByIdDelete} value={this.state.deleteEvent} placeholder="Id evento"/>
                    <Button style={{backgroundColor: "#f06e4e"}} onClick={this.deleteEvent} label="Eliminar"/>
                </div>
                <div style={{paddingTop: 10}} hidden={this.state.hide2}>
                    <InputText onChange={this.getByPut} value={this.state.putById} placeholder={"Id evento"}/>
                    <InputText onChange={this.getByDate2} value={this.state.putByDate}
                               placeholder={"aaaa-MM-dd  hh:mm"}/>
                    <Button style={{backgroundColor: "#dcd367"}} onClick={this.changeDateEvent} label="Modificar"/>
                </div>
                <div style={{paddingTop: 10}} hidden={this.state.hide3}>
                    <InputText onChange={this.insertByLocal} value={this.state.postByLocal}
                               placeholder={"Equipo local"}/>
                    <InputText onChange={this.insertByVisitor} value={this.state.postByVisitor}
                               placeholder={"Equipo visitante"}/>
                    <InputText onChange={this.getByDate2} value={this.state.putByDate}
                               placeholder={"aaaa-MM-dd  hh:mm"}/>
                    <Button style={{backgroundColor: "#ccdcbb"}} onClick={this.InsertEvent} label="Dar de alta"/>
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

    componentDidMount() {
        this.getInfoEvent();
    }

    getInfoEvent = () => {
        axios.get('https://localhost:44301/api/eventos').then((resultRequest) => {
            this.setState({userInfoData: resultRequest.data});
            console.log(this.state.userInfoData);
        })
    }

    getByLocal = (localInput) => {
        this.setState({local: localInput.target.value},
            () => {
                if (this.state.local.length > 0) {
                    this.setState({stateInputVisitante: true, stateInputFecha: true});
                } else {
                    this.setState({stateInputVisitante: false, stateInputFecha: false,});
                    this.getInfoEvent();
                }
            }
        );
    }
    getByVisitante = (visitantInput) => {
        this.setState({visitante: visitantInput.target.value},
            () => {
                if (this.state.visitante.length > 0) {
                    this.setState({stateInputLocal: true, stateInputFecha: true});
                } else {
                    this.setState({stateInputLocal: false, stateInputFecha: false});
                    this.getInfoEvent();
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
                    this.getInfoEvent();
                }
            }
        )
    }
    viewFilterEvents = () => {
        if (this.state.local !== '') {
            axios.get('https://localhost:44301/api/eventos?local=' + this.state.local).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("No hay eventos con " + this.state.local + " como equipo local");
                    this.setState({local: ''});
                }
            }).catch(function (error) {
                alert("Error" + error.message.toString());
            })
        }
        if (this.state.visitante !== '') {
            axios.get('https://localhost:44301/api/eventos?visitante=' + this.state.visitante).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("No hay eventos con " + this.state.visitante + " como equipo local");
                    this.setState({visitante: ''});
                }

            }).catch(function (error) {
                alert("Error" + error.message.toString());
            })
        }
        if (this.state.fecha !== '') {
            axios.get('https://localhost:44301/api/eventos?fecha=' + this.state.fecha).then((resultRequest) => {
                if (resultRequest.data.length > 0) {
                    this.setState({userInfoData: resultRequest.data});
                } else {
                    alert("No hay fechas que coincidan");
                    this.setState({fecha: ''});
                }

            })
                .catch(function (error) {
                    alert("Error" + error.message.toString());
                })
        }
    }
    getByIdDelete = (eventInput) => {
        this.setState({deleteEvent: eventInput.target.value});
    }
    getByPut = (eventInput) => {
        this.setState({putById: eventInput.target.value});
    }
    getByDate2 = (eventInput) => {
        this.setState({putByDate: eventInput.target.value});
    }
    insertByLocal = (eventInput) => {
        this.setState({postByLocal: eventInput.target.value});
    }
    insertByVisitor = (eventInput) => {
        this.setState({postByVisitor: eventInput.target.value});
    }
    deleteEvent = () => {
        axios.delete('https://localhost:44301/api/eventos?id=' + this.state.deleteEvent).then((resultRequest) => {
            this.setState({deleteEvent: ''});
            this.setState({userInfoData: resultRequest.data},
                () =>
                    this.getInfoEvent()
            )
        });
    }
    changeDateEvent = () => {
        axios.put('https://localhost:44301/api/eventos?id=' + this.state.putById + '&fecha=' + this.state.putByDate).then((resultRequest) => {
            this.setState({putByDate: '', putById: ''});
            this.setState({userInfoData: resultRequest.data},
                () =>
                    this.getInfoEvent()
            )
        })
    }
    InsertEvent = () => {
        axios.post('https://localhost:44301/api/eventos/', {
            EquipoLocal: this.state.postByLocal,
            EquipoVisitante: this.state.postByVisitor,
            Fecha: this.state.putByDate
        }).then((resultReques) => {
            this.setState({postByLocal: '', postByVisitor: '', putByDate: '', userInfoData: resultReques.data},
                () =>
                    this.getInfoEvent());
        })
    }
}
