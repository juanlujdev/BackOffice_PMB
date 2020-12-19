import * as React from 'react';
import {Fragment} from 'react';

export default class ListUser extends React.Component {
    render() {//render() significa pintar por pantalla, quiero que me saque por pantalla la imagen y
        //Nombre: y como quiero que se llame la propiedad (en este caso name, puede ser como quieras
        return (
            <Fragment>
                <div className={'dataUser'}>
                    <div className={'picture'}>
                        <img
                            src={'https://hotmart.s3.amazonaws.com/product_contents/3f4c8a14-9928-4c77-8f14-605b5beb93db/SzilagyiZoltanAvatarSmall300x300.jpg'}>
                        </img>
                    </div>
                    {/*como quiero pasarle los datos al constructor, quiero que salga en la lista
                    Nombre: el nombre, Apellidos: apellidos, fecha nacimiento: nac. Son los nombres que quiero
                    ponerle asi que en props (que hereda de React.Component) tendrá
                    */}
                    <div>
                        <p>Nombre: {this.props.name}</p>
                        <p>Apellidos: {this.props.surname} </p>
                        <p>Fecha de nacimiento: {this.props.dateOfBirth}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}
