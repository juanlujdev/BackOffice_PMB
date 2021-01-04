import './App.css';
import * as React from "react";
import {Fragment} from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Menu} from 'primereact/menu';
import {Switch, Route} from "react-router-dom";
import {UsersView} from "./UsersView";
import {BetsView} from "./BetsView";
import {EventsView} from "./EventsView";
import {ReportView} from "./ReportView";

let items = [
    {
        label: 'Usuario', icon: 'pi pi-user', command: () => {
            window.location = '/users';
        }
    },
    {
        label: 'Apuestas', icon: 'pi pi-money-bill', command: () => {
            window.location = '/bets';
        }
    },
    {
        label: 'Eventos', icon: 'pi pi-ticket', command: () => {
            window.location = '/events';
        }
    },
    {
        label: 'Informes', icon: 'pi pi-chart-line', command: () => {
            window.location = '/reports';
        }
    }
];
export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Fragment>
                    <div>
                        <Menu model={items}/>
                    </div>
                    <div className={'display'}>
                        <Switch>
                            <Route path={'/users'}>
                                <UsersView/>
                            </Route>
                            <Route path={'/bets'}>
                                <BetsView/>
                            </Route>
                            <Route path={'/events'}>
                                <EventsView/>
                            </Route>
                            <Route path={'/reports'}>
                                <ReportView/>
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
            </div>
        );
    }
}


