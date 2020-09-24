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