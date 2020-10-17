          
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
                [...changeDecoration].forEach(element => ? element.style.removeAttribute('background-color'):);
                if (bodyStyle.removeAttribute)
       bodyStyle.removeAttribute('background-color');
else        
       bodyStyle.removeProperty('background-color');
            } 

       