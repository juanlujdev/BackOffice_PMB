document.addEventListener('DOMContentLoaded',() => {
    validar();
    aceptarFormulario();    
});    
    let text;
    let url;
    const validar = () => {
        text=document.getElementById('cadena');
        //escucho si se teclea alguna tecla y si es asi voy a la funcion
        //PARA HACER CTRL+C Y CTRL+V NO LO DETECTA ASI Q LO QUE HARE ES ESCUCHAR SI SE HACER CLICK EN LA CAJA DE TEXTO Y LUEGO
        //COMPROBARE SI HAY MAS DE UN CARACTER EN LA CAJA, CON LOS IF QUE TENGO MAS ABAJO
        text.addEventListener('blur', getEventType, false);
        function getEventType(event) {
            //guardo el valor que hay en la caja de texto en una variable, para comprobar en todo momento si esta borrado lo q teclee
            // o no, esta variable es solo de para comprobar
            const cont=document.getElementById('cadena').value;
            const botonContinuar=document.getElementById('continuar');
            //si hay mas de 0 caracteres habilito el boton y guardo en la var url la direccion
            if(cont.length>0){
            botonContinuar.style.backgroundColor=" #1883ba";
            botonContinuar.disabled=false;
            botonContinuar.addEventListener('click',() => {                
                //guardo en la url la direccion
                url=document.getElementById('cadena').value; 
                //es para comprobar que se guarda la direccion
                console.log(url);
                //oculto y muestro formulario y centrado
                const formulario=document.getElementById('formulario');
                const centrado=document.getElementById('centrado');
                const paso1=document.getElementById('paso1');       
                paso1.setAttribute('hidden','true');
                formulario.removeAttribute('hidden');
                centrado.setAttribute('hidden','true');
                //LO HACE PERO ME DA ERROR PREGUNTAR COMO FUNCIONA EL BLUR (FOCO)
                //modifico el id del boton atras  y lo habilito y continuar
                //const buttonAtras=document.getElementById('atras');                
                //buttonAtras.disabled='false';
                //buttonAtras.style.backgroundColor="#1883ba";
                //buttonAtras.id="formPrincipal";//vuelve al formulario inicial
                botonContinuar.id="aceptarCampo";
            });
            }
            else{
                botonContinuar.disabled=true;
                botonContinuar.style.backgroundColor="grey";
            }   
        }         
    }
    const aceptarFormulario = () =>{
        const aceptarCampo=document.getElementById('aceptarCampo');
        if(aceptarCampo){
            //aceptarCampo.onclick="validarFormulario()";
            aceptarCampo.addEventListener('click',()=>{});
        }
        
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
        const caracteres=/^[a-zA-Z0-9]+$/;
        const numeros=/^[0-9]+$/;
        let activacion=false;
        var message="Rellena los siguientes campos: \n";
        var messageTrue="Tus datos son los siguientes: \t";
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
        //if(direccion != /^[a-zA-Z0-9]+$/)
        if(!(caracteres.test(direccion))){
            activacion=true;
            message+="Direccion \n";
            direccionError.removeAttribute('hidden');
        }
        else{
            direccionError.setAttribute('hidden','true');
        }
        //TENGO QUE HACER LA VALIDACION PARA QUE SEA SOLO NUMERICO ||(cp!=/^[0-9]+$/)
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
            messageTrue+="\n"+name+"\n"+date+"\n"+direccion+"\n"+cp+"\n"+provincia+"\n"+municipio+"\n";
            const muestraError=document.getElementById('muestraError');
                muestraError.removeAttribute('hidden');
                muestraError.innerText=messageTrue;
                muestraError.setAttribute("id","muestraOk");
        }     

    }     
            
    

