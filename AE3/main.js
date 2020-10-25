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
        text.addEventListener('keydown', getEventType, false);
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
            console.log(url);
            }); 

            }
            else{
                boton.disabled=true;
            }

                       
            
            //const log = document.getElementById('log');
            //log.innerText = event.type + '\n' + log.innerText;
            
          }

        /*
        var boton=document.getElementById('continuar');
       boton.addEventListener('click',()=>{
            text=document.getElementById('cadena').value; 
            console.log(text);           
        });
        
        text=document.getElementById('cadena');
        //text=document.addEventListener('keydown', getEventById('cadena'));
        console.log(text);
        if(text.length==0){
            //text.disabled=true;

        }
        else{
            //text.disabled=true;
        }
        */

       
      
      // Keyboard events
        // first
    }

