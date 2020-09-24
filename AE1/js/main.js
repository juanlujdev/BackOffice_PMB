//ACTIVIDAD 1
alert ("soy el primer script");
let alertMessage="soy el primer script";
alert (alertMessage);
const  ALERT_MESSAGE=("soy el primer script") + " y estoy funcionando sobre" +navigator.appVersion;
alert (ALERT_MESSAGE);


//ACTIVIDAD 2.1
let meses=[" enero", " febrero", " marzo", " abril", " mayo", " junio", " julio"," agosto"," septiembre"," octubre"," noviembre"," diciembre"]
let mensaje="";
for (let i=0;i<meses.length;i++){
    mensaje=mensaje+meses[i];    
}
console.log(mensaje);


//ACTIVIDAD 2.2

let meses2=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio","agosto","septiembre","octubre","noviembre","diciembre"]
console.table(meses2);

//ACTIVIDAD 3.1

const values=[true,false,5,"hola",[1,2,3],{age:2,gender:'male'}];
for (let i=0;i<values.length;i++){
    var dato=values[i];
   console.log(typeof dato);
}

//ACTIVIDAD 4.1

var numero1=5;
var numero2=8;

if(numero2>numero1){
    console.log("numero1 no es mayor que numero 2.");
}
if(numero2>0){
    console.log("numero2 es positivo.");
}
if((numero1<0)||(numero1!=0)){
    console.log("numero1 es negativo o distinto de cero.");
}
if ((numero1+1!=numero2)||(numero1+1<numero2)){
    console.log("incrementar en 1 unidad el valor de  numero1 no lo hace mayor o igual que numero2.");
}

//ACTIVIDAD 5.1

var num=5;
var total=1
for(let i=1;i<=num;i++){
    total=total*i;
}
console.log("el resultado es: "+ total);