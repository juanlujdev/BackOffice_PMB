document.addEventListener('DOMContentLoaded',() => {
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
        text=document.getElementById('cadena');
        //escucho si se teclea alguna tecla y si es asi voy a la funcion
        //PARA HACER CTRL+C Y CTRL+V NO LO DETECTA ASI Q LO QUE HARE ES ESCUCHAR SI SE HACER CLICK EN LA CAJA DE TEXTO Y LUEGO
        //COMPROBARE SI HAY MAS DE UN CARACTER EN LA CAJA, CON LOS IF QUE TENGO MAS ABAJO
        text.addEventListener('blur', getEventType);
        function getEventType() {
            //guardo el valor que hay en la caja de texto en una variable, para comprobar en todo momento si esta borrado lo q teclee
            // o no, esta variable es solo de para comprobar
            const cont=document.getElementById('cadena').value;
            const botonContinuar=document.getElementById('continuar');
            //si hay mas de 0 caracteres habilito el boton y guardo en la var url la direccion
            if(cont.length>0){
                botonContinuar.disabled=false;                    
                botonContinuar.addEventListener('click',() => {                
                    //guardo en la url la direccion
                    url=document.getElementById('cadena').value; 
                    //es para comprobar que se guarda la direccion
                    //console.log(url);
                    //oculto y muestro formulario y centrado
                    const paso2=document.getElementById('paso2');
                    const centrado=document.getElementById('centrado');
                    const paso1=document.getElementById('paso1');
                    paso1.setAttribute('hidden','true');
                    paso2.removeAttribute('hidden');
                    centrado.setAttribute('hidden','true');
                    //botonContinuar.id="aceptarCampo";
                });
                //botonContinuar.disabled=true;
                /*
                    if(botonContinuar.disabled==true){
                        botonContinuar.disabled=false;                    
                        botonContinuar.addEventListener('click',() => {                
                            //guardo en la url la direccion
                            url=document.getElementById('cadena').value; 
                            //es para comprobar que se guarda la direccion
                            //console.log(url);
                            //oculto y muestro formulario y centrado
                            const paso2=document.getElementById('paso2');
                            const centrado=document.getElementById('centrado');
                            const paso1=document.getElementById('paso1');
                            paso1.setAttribute('hidden','true');
                            paso2.removeAttribute('hidden');
                            centrado.setAttribute('hidden','true');
                            botonContinuar.id="aceptarCampo";
                    }   
                        );
                
                }
                else{
                    otonContinuar.addEventListener('click',() => {                
                        //guardo en la url la direccion
                        url=document.getElementById('cadena').value; 
                        //es para comprobar que se guarda la direccion
                        //console.log(url);
                        //oculto y muestro formulario y centrado
                        const paso2=document.getElementById('paso2');
                        const centrado=document.getElementById('centrado');
                        const paso1=document.getElementById('paso1');
                        paso1.setAttribute('hidden','true');
                        paso2.removeAttribute('hidden');
                        centrado.setAttribute('hidden','true');
                        botonContinuar.id="aceptarCampo";
                    });
                } */                      
            
            
            }
            else{
                botonContinuar.disabled=true;
                //botonContinuar.style.backgroundColor="grey";
            }   
        }         
    }
    const terminar= () =>{
        const terminarButton=document.getElementById('terminar');
        terminarButton.addEventListener('click',()=>{           
            location.href='https://'+url;
        })

        //window.location="url";
        //console.log("web nueva");
    }
    const irPaso4 = () => {
        const continuar3=document.getElementById('continuar3');
        continuar3.addEventListener('click',formularioTerminar);
    }
    const aceptarFormulario= () =>{
        const continuar2=document.getElementById('continuar2');
        continuar2.addEventListener('click',validarFormulario);
    }
    const volverPaso1= () => {
        const atras2=document.getElementById('atras2');
        atras2.addEventListener('click',volverInicio);
    }
    const volverPaso2= () => {
        const atras3=document.getElementById('atras3');
        atras3.addEventListener('click',volverFormulario);
    }
    const formularioTerminar= ()=>{
        const paso3=document.getElementById('paso3');
        const paso4=document.getElementById('paso4');
        paso3.setAttribute('hidden','true');
        paso4.removeAttribute('hidden');
    }
    const volverFormulario= ()=>{
        const paso3=document.getElementById('paso3');
        const paso2=document.getElementById('paso2');
        const muestraError=document.getElementById('muestraError');
        muestraError.setAttribute('hidden','true');
        paso3.setAttribute('hidden','true');
        paso2.removeAttribute('hidden');
    }
    const volverInicio= () =>{
        const paso2=document.getElementById('paso2');
        const centrado=document.getElementById('centrado');
        const paso1=document.getElementById('paso1');
        paso2.setAttribute('hidden','true');
        paso1.removeAttribute('hidden');        
        centrado.removeAttribute('hidden');
    }
    const validarFormulario= () => {
        const name=document.getElementById('nombre').value;
        const date=document.getElementById('date').value;
        const direccion=document.getElementById('direccion').value;
        const cp=document.getElementById('cp').value;        
        const provincia=document.getElementById('provincia').value;
        const municipio=document.getElementById('municipio').value;
        const municipioError=document.getElementById('ErrorMunicipio');
        const direccionError=document.getElementById('errorDireccion');
        const cpError=document.getElementById('ErrorCp');
        const dateError=document.getElementById('ErrorDate');
        const nameError=document.getElementById('ErrorName');        
        const caracteres= /^[\sa-zA-Z0-9]+$/;
        const numeros=/^[0-9]+$/;
        let activacion=false;
        var message="Rellena los siguientes campos: \n";
        if((name==="")||!(caracteres.test(name))){
            activacion=true;
            message+="Nombre \n";            
            nameError.removeAttribute('hidden');
        }
        else{
            nameError.setAttribute('hidden','true');
        }
        if(date===""){
            activacion=true;
            message+="Fecha \n";            
            dateError.removeAttribute('hidden');
        }
        else{
            dateError.setAttribute('hidden','true');
        }
        //const caracteres= /^[\sa-zA-Z0-9]+$/;
        if((direccion!="")&&(!(caracteres.test(direccion)))){
            activacion=true;
            message+="Direccion \n";
            direccionError.removeAttribute('hidden');
        }
        else{
            direccionError.setAttribute('hidden','true');
        }
        if((cp==="")||!(numeros.test(cp))){
            activacion=true;
            message+="Codigo postal \n";            
            cpError.removeAttribute('hidden');
        }
        else{
            cpError.setAttribute('hidden','true');
        }
        if(municipio===""){
            activacion=true;
            message+="Municipio \n";            
            municipioError.removeAttribute('hidden');
        } 
        else{
            municipioError.setAttribute('hidden','true');
        }
        if (activacion==true) { 
            const muestraError=document.getElementById('muestraError');
                muestraError.removeAttribute('hidden');
                muestraError.innerText=message; 
        }
        else{
            const datos =new Object();
            let salida="";
            datos.nombre=name;
            datos.fecha=date;
            datos.direccion=direccion;
            datos.cp=cp;
            datos.provincia=provincia;
            datos.municipio=municipio;
            const datosJson=JSON.stringify(datos);
            const miObjeto=JSON.parse(datosJson);
            for(i in miObjeto){
                salida +=  i+ "=" + miObjeto[i] + '\n';
            }
            const paso3=document.getElementById('paso3');
            const paso2=document.getElementById('paso2');
            const muestraOk=document.getElementById('muestraOk');
            paso2.setAttribute('hidden','true');
            paso3.removeAttribute('hidden');
            muestraOk.innerText=salida;
            
            
        }
    }     

    

