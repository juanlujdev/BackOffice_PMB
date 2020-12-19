import './App.css';
import ListUser from './components/ListUser'
import * as React from "react";
import {Fragment} from "react";
import data from './users.json';

class App extends React.Component {
    constructor(props) {
        super(props);//con los props solo son de lectura y le decimos de que manera se leen, (en el componente ListUser.js)
        this.state = { //donde guardo los estados. en los states se pueden modificar
            surname: '',
            stateButton: true,//habilito el disable a true.
            renderizado: false// como desde un evento de un boton no puedo renderizar algo, juego con este boleano. si esta a false no enseña nada y si esta a true si.
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <header className="App-header">
                        <input //value={this.state.surname}//guarda en surname del state el valor del input. no hace falta porque lo guarda el metodo savechanges
                               onChange={this.saveChanges}//cada vez que hay un cambio en el input llamo al metodo saveChanges
                               placeholder='Apellidos'>
                        </input>
                        <button type={"button"} disabled={this.state.stateButton}//recoge el estado del boton para saber si se tiene que mostrar o no. ese stateButton
                            //cambia con el metodo saveChanges del input y cambia segun hay letra en el input o no
                                onClick={this.sendFilter}>Filtrado
                        </button> {/*metodo para filtrar*/}
                        {this.paintList()}  {/*metodo para pintar por pantalla*/}
                    </header>
                </div>
            </Fragment>
        );
    }

//metodo que guarda los cabios del input, devolvera lo que recupera el (value)
    saveChanges = (eventInput) => {
        this.setState({surname: eventInput.target.value},//con setState  actualiza los cambios de surname en el state (el target es como de donde viene (input) y el value es su valor)
            () => {//hacemos otra funcion sin necesidad de declararla porque no la vamos a devolver esto seria solo mostrar los datos x consola.// callback: hasta que el estado no halla cambiando no haga lo siguiente
                if (this.state.surname.length > 0) { //si la longitud de surname es mayor que 0 (los strings son como los arrays)
                    this.setState({stateButton: false})//cuando se hace setState no hace falta poner luego state.stateButto, ya sabe que debe cambiar el statebutton de el state (el de arriba del todo)
                } else {
                    this.setState({stateButton: true})
                }
            });
        this.setState({renderizado: false})//siempre que hay un cambio en el input lo pongo a falso para que
        //no muestre ningun dato de listas. asi solamente se activaria a true cuando demos al boton. esto se hace para
        //que cuando se muestre los datos de un usuario y se quiera mostrar los datos de otro usuario no lo haga
        //conforme encuentre un cambio, sino q lo haga cuando lo activamos a true desde el boton
    }
    sendFilter = () => {//metodo que pone en true el renderizado en su state para que cuando se llame al metodo
        //paintList de mas abajo compruebe que esta a true y pinte.(recordamos que solo se puede hacer click al
        //boton cuando tenga el input datos
        this.setState({renderizado: true}
        )


    }
    paintList = () => {
        if (this.state.renderizado) {//si renderizado esta a true devuelve
            return data.map((item, index) => {//data viene de los datos de los usuarios de users.json
                //con el map recorro los datos de map, en item esta cada objeto json y como es un grupo de objetos
                //el index te da su indice
                if (item.surname === this.state.surname) {//si hay algun surname de data que coincida con el
                    //state surname que tiene guardado (del input) quiero que me devuelvas el componente ListUser
                    //que devolvera una imagen y 3 <p> con Nombre: Apellidos: Fecha de nacimiento: y que cada una
                    //sera igual en su prop.name prop.apellidos al item.name que ha encontrado
                    return <ListUser key={index} name={item.name} surname={item.surname}
                                     dateOfBirth={item.dateOfBirth}>
                    </ListUser>
                }
                return null; //si no pasa nada que no devulva nada
            })
        }
    };


}

export default App;
