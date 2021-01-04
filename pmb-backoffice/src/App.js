import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {Fragment} from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Menu } from 'primereact/menu';

let items = [
    {label: 'Usuario', icon: 'pi pi-user'},
    {label: 'Apuestas', icon: 'pi pi-money-bill'},
    {label:'Eventos', icon:'pi pi-ticket'},
    {label: 'Informes', icon: 'pi pi-chart-line'}
];
    export default class App extends React.Component {

        render() {
            return (
                <div className="App">
                    <Fragment>
                        <div>
                            <Menu model={items} />
                        </div>

                    </Fragment>
                </div>
            );
        }
    }


