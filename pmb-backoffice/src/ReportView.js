import * as React from "react";
import {Fragment} from "react";

import {Chart} from 'primereact/chart';
import {RadioButton} from 'primereact/radiobutton'

import axios from "axios";


export class ReportView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelDay: [],
            userDay: [],
            hide: false,
            hide2: true,
            checked: true,
            checked2: false
        }
    }

    render() {
        const
            basicData = {
                labels: this.state.labelDay,
                datasets: [
                    {
                        label: 'Altas por dia',
                        backgroundColor: '#42A5F5',
                        data: this.state.userDay
                    }

                ]
            };
        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        }
        const
            basicData2 = {
                labels: this.state.labelDay,
                datasets: [
                    {
                        label: 'Apuestas por dia',
                        backgroundColor: '#FFA726',
                        data: this.state.userDay
                    }

                ]
            };
        let basicOptions2 = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        }
        return (
            <Fragment>
                <div>
                    <h5>Altas por dia</h5>
                    <RadioButton checked={this.state.checked} onChange={this.showUsers}/>
                    <h5>Apuestas por dia</h5>
                    <RadioButton checked={this.state.checked2} onChange={this.showBets}/>
                </div>
                <div hidden={this.state.hide}>
                    <Chart type="line" data={basicData} options={basicOptions}/>
                </div>
                <div hidden={this.state.hide2}>
                    <Chart type="line" data={basicData2} options={basicOptions2}/>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {
        if (this.state.checked === true) {
            this.daysUsers();
            this.newUsers();
        }
        else {
            this.daysBets();
            this.newBets();
        }

    }

    daysUsers = () => {
        axios.get('https://localhost:44301/Api/usuarios?dateId=3').then((resultRequest) => {
            this.setState({labelDay: resultRequest.data});
        })
    }

    newUsers = () => {
        axios.get('https://localhost:44301/Api/usuarios?users=3').then((resultRequest) => {
            this.setState({userDay: resultRequest.data});
        })
    }
    showBets = () => {
        this.setState({checked: false, checked2: true, hide: true, hide2: false});
    }
    showUsers = () => {
        this.setState({checked: true, checked2: false, hide: false, hide2: true});
    }

    daysBets = () => {
        axios.get('https://localhost:44301/Api/apuestas?dateId=3').then((resultRequest) => {
            this.setState({labelDay: resultRequest.data});
        })
    };

    newBets = () => {
        axios.get('https://localhost:44301/Api/apuestas?dateId=3').then((resultRequest) => {
            this.setState({labelDay: resultRequest.data});
        })
    };
}
