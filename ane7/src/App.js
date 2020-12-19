import logo from './logo.svg';
import './App.css';
import ListUser from './components/ListUser'
import {Fragment} from "react";
import * as React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //donde guardo los estados.
            surname: '',
            stateButton:true,//habilito el disable a true.
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <header className="App-header">
                        <input value={this.state.surname}
                               onChange={this.saveChanges}
                               placeholder='Apellidos'>
                        </input>
                        <button type={"button"} disabled={this.state.stateButton}>Filtrado</button>
                        <ListUser></ListUser>
                    </header>

                </div>
            </Fragment>
        );
    }
//metodo que guarda los cabios del input, devolvera lo que recupera el (value)
    saveChanges = (valueInput) => {
        this.setState({surname: valueInput.target.value},//con setState  cambia y guarda los cambios de surname en el state (el target es como donde queremos guardarlo y el value es su valor)
            () => {//hacemos otra funcion sin necesidad de declararla porque no la vamos a devolver esto seria solo mostrar los datos x consola.
                console.log(this.state.surname);
            });
    }
}

export default App;
