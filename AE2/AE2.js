//#region  AE2_1.1 
function deleteNumbers (valores){
    return typeof(valores) ==="string";
}
let valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newValores=valores.filter(deleteNumbers);
console.log(newValores);
//Funcion Flecha
const valoresX = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
const deleteNumbers2=(arr) => arr.filter(item => typeof(item) ==="string");
console.log(deleteNumbers2(valores));
//#endregion 
//#region AE2_1.2
function parNumbers(valores2){
    if (typeof (valores2!=="string")){
       return valores2%2==0;
    }
}
let valores2 = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newValores2=valores2.filter(parNumbers);
console.log(newValores2);
//Funcion Flecha
const valoresY = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
const parNumbers2=(arr) => arr.filter(item => typeof (item)!=="string" && item%2==0);
console.log(parNumbers2(valoresY));
//#endregion
//#region AE2_2
function average(a,b){   
    if(dataArray.length>0){
        return  a+b;
    }   
}
const dataArray=[3,5,77,8];
console.log(dataArray.reduce(average,0)/dataArray.length);
//Funion Flecha
const dataArray2=[3,5,77,8];
let avergae2 = (arr) => arr.length > 0 ? arr.reduce(item = (acc,item) => acc+item)/arr.length : "undefined";
console.log(avergae2(dataArray2));
//#endregion
//#region  AE2_3
function findMinimun(values){
    return values.reduce((acumulador, item) => acumulador < item ? acumulador : item);//si acumulador es mayor que item devuelves "?"acumulador si no ":"devuelvo item
}
console.log(findMinimun([3,5,2,8]));
//#endregion
//#region AE2_4
function findGreaterThan(x,values){
    var mayores=true;
    values.reduce ((acum,item) => item < x ? mayores=false : null);    
    return mayores;
}
console.log(findGreaterThan(5,[9,1,9,6]));
//funcion flecha
let findGreaterThan2=(x,values)=>{
    var mayores=true;
    values.reduce ((acum,item) => item < x ? mayores=false : null);    
    return mayores;}    
    console.log(findGreaterThan2(5,[9,1,8,5,5]))
   //Con every   
   const findGreaterThan3=(x,value)=>
       value.every( value => value > x);    
   console.log(findGreaterThan3(5,[7,8,6]));   
 //#endregion
//#region AE2_5   

//LO HAGO CON FUNCION NORMAL(NO ME SALE)
/*
const values2=[4,5];
function multiFactorial2(arr){
    arr.map(fact(item));//como llamo a la funcion fact pra pasarle el item??
    function fact(item){
        let acc=1;//acumulador
       for(let i=1;i<=item;i++){
           acc*=i;
           return acc;
       }
    }
}
console.log(multiFactorial2(values2));
*/
const multiFactorial = (arr) => arr.map(item => { //arr es como le llamo y contiene el array de values
    let acumulador = 1;
    for(i = 1; i <= item; i++){acumulador *=i}
    return acumulador;
 } );
const values = [3,5,7]
console.log(multiFactorial(values));
//#endregion
//#region AE2_6
const users=["pablo", "luis", "pedro", "miguel"];
const blackListed=["pablo", "alberto"];
const usuariosNoBaneados= (use,bL) => use.filter(item1=>bL.every(item2=>item2!==item1));
console.log(usuariosNoBaneados(users,blackListed));
//#endregion