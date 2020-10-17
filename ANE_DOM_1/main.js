          
            document.addEventListener('DOMContentLoaded',() => {
                changeTitle();
                addId();
                halfFontSize();
                changeDecoration();
            });
            const changeTitle= () => {
                document.title = 'Ahora trabajo con DOM Dinmico';
            }
            const addId=() => {
                const add=document.getElementsByTagName('section');
                [...add]
                for(let i=1; i<add.length;i++){
                    add[i].id=i;
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
                    element.addEventListener("mouseout",down)                                                   
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

       