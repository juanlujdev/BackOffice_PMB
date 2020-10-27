document.addEventListener('DOMContentLoaded',() => {
    validar();
    
});
    
    
    var text;
    var url;
    const validar = () => {
        text=document.getElementById('cadena');
        //escucho si se teclea alguna tecla y si es asi voy a la funcion
        //PARA HACER CTRL+C Y CTRL+V NO LO DETECTA ASI Q LO QUE HARE ES ESCUCHAR SI SE HACER CLICK EN LA CAJA DE TEXTO Y LUEGO
        //COMPROBARE SI HAY MAS DE UN CARACTER EN LA CAJA, CON LOS IF QUE TENGO MAS ABAJO
        text.addEventListener('keyup', getEventType, false);
        function getEventType(event) {
            //guardo el valor que hay en la caja de texto en una variable, para comprobar en todo momento si esta borrado lo q teclee
            // o no, esta variable es solo de para comprobar
            var cont=document.getElementById('cadena').value;
            var boton=document.getElementById('continuar');
            //si hay mas de 0 caracteres habilito el boton y guardo en la var url la direccion
            if(cont.length>0){
                
            boton.disabled=false;
            boton.addEventListener('click',() => {
                url=document.getElementById('cadena').value; 
                //es para comprobar que se guarda la direccion
                console.log(url);
                //oculto y muestro formulario y centrado
                const formulario=document.getElementById('formulario');
                const centrado=document.getElementById('centrado');
                const cabecera=document.getElementById('cabecera');                
                //const cabecera2=document.getElementById('cabecera2');
                //cabecera2.removeAttribute('hidden');
                cabecera.setAttribute('hidden','true');
                formulario.removeAttribute('hidden');
                centrado.setAttribute('hidden','true');
                /*const atras2=document.getElementById('atras2');
                const atras=document.getElementById('atras');
                const continuar2=document.getElementById('continuar2');
                const continuar=document.getElementById('continuar');
                atras2.removeAttribute('hidden');
                continuar2.removeAttribute('hidden');
                atras.setAttribute('hidden','true');
                continuar.setAttribute('hidden','true');*/

            }); 

            }
            else{
                boton.disabled=true;
            }   
        }         
    }
    const validarFormulario= () => {
        var name=document.getElementById('nombre').value;
        var date=document.getElementById('date').value;
        var direccion=document.getElementById('direccion').value;
        var cp=document.getElementById('cp').value;
        var provincia=document.getElementById('provincia').value;
        var municipio=document.getElementById('municipio').value;
        const municipioError=document.getElementById('ErrorMunicipio');
        const cpError=document.getElementById('ErrorCp');
        const dateError=document.getElementById('ErrorDate');
        const nameError=document.getElementById('ErrorName');
        var activacion=false;
        var message="Rellena los siguientes campos: \n";
        var messageTrue="Tus datos son los siguientes: \t";
        if(name===""){
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
        //TENGO QUE HACER LA VALIDACION PARA QUE SEA SOLO NUMERICO ||(cp!=/^[0-9]+$/)
        if(cp==""){
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
            
    

