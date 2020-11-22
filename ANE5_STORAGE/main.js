'use strict'
document.addEventListener('DOMContentLoaded', () => {
    validar();
    aceptarFormulario();
    volverPaso1();
    volverPaso2();
    irPaso4();
    terminar();
});
let text;
let url;
const validar = () => {
    if (localStorage.getItem('url') == null) {
        text = document.getElementById('cadena');
        text.addEventListener('paste', getEventType);
        text.addEventListener('keyup', getEventType);
        function getEventType() {
            const cont = document.getElementById('cadena').value;
            const botonContinuar = document.getElementById('continuar');
            if (cont.length > 0) {
                botonContinuar.disabled = false;
                botonContinuar.addEventListener('click', () => {
                    url = document.getElementById('cadena').value;
                    //guardo en local storage la url
                    localStorage.setItem('url', url);
                    const paso2 = document.getElementById('paso2');
                    const centrado = document.getElementById('centrado');
                    const paso1 = document.getElementById('paso1');
                    paso1.setAttribute('hidden', 'true');
                    paso2.removeAttribute('hidden');
                    centrado.setAttribute('hidden', 'true');
                    //llamo a la funcion si tiene la persistencia datos los cargue, si te devuelce un objeto lo sacas por el formulario
                    if (getDatosForm() != null) {
                        const Object = getDatosForm();
                        //const miObjeto=JSON.parse(Object);
                        //validarFormulario();
                        muestraObjetoCorrecto(Object);
                        //7const name=document.getElementById('nombre');
                        //name=JSON.parse(name);
                        //name= Object.nombre.value;
                        //validarFormulario();                       

                        console.log(Object.nombre);
                        console.log(Object.fecha);
                        console.log(Object.direccion);
                        console.log(Object.cp);
                        console.log(Object.provincia);
                        console.log(Object.municipio);
                        /*
                        const name=document.getElementById('nombre');
                        name.textContent=Object.nombre;*/
                    }
                });
            }
            else {
                botonContinuar.disabled = true;
            }
        }
    }
    else {
        const url2 = localStorage.getItem('url');
        const cont = document.getElementById('cadena');
        cont.value = url2;
        cont.disabled = true;
        const botonContinuar = document.getElementById('continuar');
        botonContinuar.disabled = false;
        botonContinuar.addEventListener('click', () => {
            const paso2 = document.getElementById('paso2');
            const centrado = document.getElementById('centrado');
            const paso1 = document.getElementById('paso1');
            paso1.setAttribute('hidden', 'true');
            paso2.removeAttribute('hidden');
            centrado.setAttribute('hidden', 'true');
            url = url2;
            if (getDatosForm() != null) {
                const Object = getDatosForm();
                //const miObjeto=JSON.parse(Object);
                //validarFormulario();
                muestraObjetoCorrecto(Object);
                //7const name=document.getElementById('nombre');
                //name=JSON.parse(name);
                //name= Object.nombre.value;
                //validarFormulario();                       

                console.log(Object.nombre);
                console.log(Object.fecha);
                console.log(Object.direccion);
                console.log(Object.cp);
                console.log(Object.provincia);
                console.log(Object.municipio);
                /*
                const name=document.getElementById('nombre');
                name.textContent=Object.nombre;*/
            }

        }
        );
    }

}
const terminar = () => {
    const terminarButton = document.getElementById('terminar');
    terminarButton.addEventListener('click', () => {
        location.href = 'https://' + url;
    })
}
const irPaso4 = () => {
    const continuar3 = document.getElementById('continuar3');
    continuar3.addEventListener('click', formularioTerminar);
}
const aceptarFormulario = () => {
    const continuar2 = document.getElementById('continuar2');
    continuar2.addEventListener('click', validarFormulario);
}
const volverPaso1 = () => {
    const atras2 = document.getElementById('atras2');
    atras2.addEventListener('click', volverInicio);
}
const volverPaso2 = () => {
    const atras3 = document.getElementById('atras3');
    atras3.addEventListener('click', volverFormulario);
    //LLamo a la funion donde tiene cargado la persistencia del objeto
    getDatosForm();
}
const formularioTerminar = () => {
    const paso3 = document.getElementById('paso3');
    const paso4 = document.getElementById('paso4');
    paso3.setAttribute('hidden', 'true');
    paso4.removeAttribute('hidden');
}
const volverFormulario = () => {
    const paso3 = document.getElementById('paso3');
    const paso2 = document.getElementById('paso2');
    const muestraError = document.getElementById('muestraError');
    muestraError.setAttribute('hidden', 'true');
    paso3.setAttribute('hidden', 'true');
    paso2.removeAttribute('hidden');
}
const volverInicio = () => {
    const paso2 = document.getElementById('paso2');
    const centrado = document.getElementById('centrado');
    const paso1 = document.getElementById('paso1');
    paso2.setAttribute('hidden', 'true');
    paso1.removeAttribute('hidden');
    centrado.removeAttribute('hidden');
}
const validarFormulario = () => {
    const name = document.getElementById('nombre').value;
    const date = document.getElementById('date').value;
    const direccion = document.getElementById('direccion').value;
    const cp = document.getElementById('cp').value;
    const provincia = document.getElementById('provincia').value;
    const municipio = document.getElementById('municipio').value;
    const municipioError = document.getElementById('ErrorMunicipio');
    const direccionError = document.getElementById('errorDireccion');
    const cpError = document.getElementById('ErrorCp');
    const dateError = document.getElementById('ErrorDate');
    const nameError = document.getElementById('ErrorName');
    const caracteres = /^[\sa-zA-Z0-9]+$/;
    const numeros = /^[0-9]+$/;
    let activacion = false;
    var message = "Rellena los siguientes campos: \n";
    if ((name === "") || !(caracteres.test(name))) {
        activacion = true;
        message += "Nombre \n";
        nameError.removeAttribute('hidden');
    }
    else {
        nameError.setAttribute('hidden', 'true');
    }
    if (date === "") {
        activacion = true;
        message += "Fecha \n";
        dateError.removeAttribute('hidden');
    }
    else {
        dateError.setAttribute('hidden', 'true');
    }
    if ((direccion != "") && (!(caracteres.test(direccion)))) {
        activacion = true;
        message += "Direccion \n";
        direccionError.removeAttribute('hidden');
    }
    else {
        direccionError.setAttribute('hidden', 'true');
    }
    if ((cp === "") || !(numeros.test(cp))) {
        activacion = true;
        message += "Codigo postal \n";
        cpError.removeAttribute('hidden');
    }
    else {
        cpError.setAttribute('hidden', 'true');
    }
    if ((municipio === "") || !(caracteres.test(municipio))) {
        activacion = true;
        message += "Municipio \n";
        municipioError.removeAttribute('hidden');
    }
    else {
        municipioError.setAttribute('hidden', 'true');
    }
    if (activacion == true) {
        const muestraError = document.getElementById('muestraError');
        muestraError.removeAttribute('hidden');
        muestraError.innerText = message;
    }
    else {
        const datos = new Object();
        //let salida="";
        datos.nombre = name;
        datos.fecha = date;
        datos.direccion = direccion;
        datos.cp = cp;
        datos.provincia = provincia;
        datos.municipio = municipio;
        const datosJson = JSON.stringify(datos);
        const miObjeto = JSON.parse(datosJson);
        //funcion mando el objeto de datos  

        sesionStorageDatosForm(datosJson);
        //creo una funcion para mostrar el objeto correctamente cargado
        muestraObjetoCorrecto(miObjeto);
        /*
        for(const i in miObjeto){
            salida +=  i+ "=" + miObjeto[i] + '\n';
        }
        
        
        const paso3=document.getElementById('paso3');
        const paso2=document.getElementById('paso2');
        const muestraOk=document.getElementById('muestraOk');
        paso2.setAttribute('hidden','true');
        paso3.removeAttribute('hidden');
        muestraOk.innerText=salida;
        */
    }

}
function muestraObjetoCorrecto(miObjeto) {
    let salida = "";
    for (const i in miObjeto) {
        salida += i + "=" + miObjeto[i] + '\n';
    }


    const paso3 = document.getElementById('paso3');
    const paso2 = document.getElementById('paso2');
    const muestraOk = document.getElementById('muestraOk');
    paso2.setAttribute('hidden', 'true');
    paso3.removeAttribute('hidden');
    muestraOk.innerText = salida;
}
//guardamos en localStorage el objeto como texto (por el stringify)
function sesionStorageDatosForm(datos) {
    sessionStorage.setItem('localDatosForm', datos);
}
//funcion recojo datos del local storage
function getDatosForm() {
    var datosJson;
    var storedList = sessionStorage.getItem('localDatosForm');
    if (storedList == null) {
        datosJson = [];
    }
    else {
        datosJson = JSON.parse(storedList);
        var name2 = document.getElementById('nombre').value;
        for (const i in datosJson) {
            name2 = datosJson[i];
        }

    }
    return datosJson;
}



