          
            document.addEventListener('DOMContentLoaded',() => {
                changeTitle();
                addId();
                halfFontSize();
                changeDecoration();
                check();
                changePicture();
            });
            const changeTitle= () => {
                document.title = 'Ahora trabajo con DOM Dinmico';
            }
            const addId=() => {
                const add=document.getElementsByTagName('section');
                [...add]
                for(let i=0; i<add.length;i++){
                    add[i].id=i+1;
                }
            }
            const halfFontSize= () => {
                const halfLetter=document.getElementsByTagName('p');
                [...halfLetter].forEach(element => element.style.fontSize = '0.5em');           
            }
            
            const changeDecoration= () => {
                const changeDecoration=document.getElementsByTagName('a');
                [...changeDecoration].forEach(element =>{
                    element.style.textDecoration='none';
                    element.style.color='white';
                    element.addEventListener("mouseover",up);
                    element.addEventListener("mouseout",down);                                                   
            }); 
            /*const up = () => {
                this.style.color = "orange";
            }*/
            function up() {
                this.style.color = "orange";
            }
            function down() {
                this.style.color = "white";            
            }
            }
            const check= () =>{
                var myDiv = document.getElementById("1");
                var checkbox = document.createElement("INPUT");
                checkbox.type = "checkbox"; 
                checkbox.name = "habilitar";
                checkbox.value = "value";
                checkbox.id = "id"; 
                // creating label for checkbox
                var label = document.createElement('label');     
                // appending the created text to  
                // the created label tag  
                label.appendChild(document.createTextNode('Seleccionar imagen'));             
                // appending the checkbox 
                // and label to div 
                myDiv.appendChild(checkbox); 
                myDiv.appendChild(label);
                /*
                ///intento hacer una condicion para que siempre este leyendo el dom y si habilitamos o no el checkbox habilita o no
                ///el boton
                if(document.createElement("INPUT").checked){
                    var button = document.getElementsByTagName('button');
                    [...button].forEach(element => {
                        element.disabled=false;
                    });
                }
                else {
                    var button = document.getElementsByTagName('button');
                    [...button].forEach(element => {
                        element.disabled=true;
                    });
                    */
                                
                //con esto consigo tener de primeras el boton deshabilitado, y cuando hago click en el checkbox lo habilito
                //pero si vuelvo a dehabilitar el checkbox no me dehabilita el boton
                var button = document.getElementsByTagName('button');
                [...button].forEach(element => {
                    element.disabled=true;
                });
                //pongo a escuchar si el checkbox tiene un click
                checkbox.addEventListener('click',() => {
                    var button = document.getElementsByTagName('button');
                    [...button].forEach(element => {
                        element.disabled=false;
                    });
                    ///estoy intentando poner la propiedad disabled del boton a false cuando se hace click para poder 
                    ///enviar en el ejercicio 6 la foto y cuando no este clickado este disabled a true y no pueda enviar
                })

              //  document.formulario.boton.disabled = true;
                //objetoDOM.removeAttribute("disabled");
            }
            const changePicture= () =>{
                var button = document.getElementsByTagName('button')
            }
                  