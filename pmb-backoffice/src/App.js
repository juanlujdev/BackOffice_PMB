import {NavLink, Route, Switch} from "react-router-dom";
import * as React from "react";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {UsersView} from "./UsersView";
import {BetsView} from "./BetsView";
import {EventsView} from "./EventsView";
import {ReportView} from "./ReportView";
import './App.css';


export default class App extends React.Component {

    render() {
        return (
            <fragment>
                <div className="App">
                    <div className={'menu'}>
                        <ul>
                            <li>
                                <NavLink to={'/users'} activeClassName={'menu-active'}>Usuarios</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/bets'} activeClassName={'menu-active'}>Apuestas</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/events'} activeClassName={'menu-active'}>Eventos</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/reports'} activeClassName={'menu-active'}>Informes</NavLink>
                            </li>
                        </ul>
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
                </div>
            </fragment>

        );
    }
}


