import * as React from "react";
import {Fragment} from "react";

import {Chart} from 'primereact/chart';

import axios from "axios";


export class ReportView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelDay: [],
            userDay: [],
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
        return (
            <Fragment>
                <div className="card">
                    <h5>Vertical</h5>
                    <Chart type="line" data={basicData} options={basicOptions}/>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {
        this.days();
        this.newUsers();
    }

    days = () => {
        axios.get('https://localhost:44301/Api/usuarios?dateId=3').then((resultRequest) => {
            this.setState({labelDay: resultRequest.data});
        })
    }

    newUsers = () => {
        axios.get('https://localhost:44301/Api/usuarios?users=3').then((resultRequest) => {
            this.setState({userDay: resultRequest.data});
        })
    }
}
