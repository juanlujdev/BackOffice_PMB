import * as React from "react";
import {Chart} from 'primereact/chart';
import {Fragment} from "react";

export class ReportView extends React.Component {

    render() {
        const
            basicData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90]
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
                    <Chart type="bar" data={basicData} options={basicOptions}/>
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <Chart type="horizontalBar" data={basicData} options={basicOptions}/>
                </div>
            </Fragment>
        );
    }
}
