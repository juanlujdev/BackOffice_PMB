import './App.css';
import ListUser from './components/ListUser'
import * as React from "react";
import {Fragment} from "react";
import data from './users.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            stateButton: true,
            renderizado: false
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <header className="App-header">
                        <input
                            onChange={this.saveChanges}
                            placeholder='Apellidos'>
                        </input>
                        {this.paintList()}
                        <button type={"button"} disabled={this.state.stateButton}
                                onClick={this.sendFilter}>Filtrado
                        </button>
                    </header>
                </div>
            </Fragment>
        );
    }

    saveChanges = (eventInput) => {
        this.setState({surname: eventInput.target.value},
            () => {
                if (this.state.surname.length > 0) {
                    this.setState({stateButton: false})
                } else {
                    this.setState({stateButton: true})
                }
            });
        this.setState({renderizado: false})
    }
    sendFilter = () => {
        this.setState({renderizado: true}
        )
    }
    paintList = () => {
        if (this.state.renderizado) {
            return data.map((item, index) => {
                if (item.surname === this.state.surname) {
                    return <ListUser key={index} name={item.name} surname={item.surname}
                                     dateOfBirth={item.dateOfBirth}>
                    </ListUser>
                }
                return null;
            })
        }
    };

}

export default App;
