import * as React from "react";
import {InputText} from "primereact/inputtext";
import { Button } from "primereact/button";

export class UsersView extends React.Component {
    render() {
        return (

            <div className={'fiter'}>
                <InputText placeholder="Nombre"/>
                <InputText placeholder="Apellidos"/>
                <InputText placeholder="Email"/>
                <Button label="Submit" icon="pi pi-check" />
            </div>
        );
    }
}
