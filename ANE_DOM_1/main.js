          
            document.addEventListener('DOMContentLoaded',() => {
                changeTitle();
                addId();
                halfFontSize();
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
                [...halfLetter].forEach(element => element.style.fontSize = '15px');           
            }
            

       