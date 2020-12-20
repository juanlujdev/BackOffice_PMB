import * as React from 'react';
import {Fragment} from 'react';
import '../App.css';

export default class ListUser extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={'dataUser'}>
                    <div className={'picture'}>
                        <img
                            src={'https://hotmart.s3.amazonaws.com/product_contents/3f4c8a14-9928-4c77-8f14-605b5beb93db/SzilagyiZoltanAvatarSmall300x300.jpg'}>
                        </img>
                    </div>
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
