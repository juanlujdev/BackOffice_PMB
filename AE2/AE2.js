//AE2_1.1 

function deleteNumbers (valores){
        return typeof(valores) ==="string";
}
let valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newValores=valores.filter(deleteNumbers);
console.log(newValores);


//AE2_2.2
function parNumbers(valores2){
    if (typeof (valores2!=="string")){
       return valores2%2==0;
    }
}
let valores2 = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newValores2=valores2.filter(parNumbers);
console.log(newValores2);


//AE2_2
function average(a,b){   
    if(dataArray.length>0){
        return  a+b;
    }
    
}
let dataArray=[3,5,77,8];
console.log(dataArray.reduce(average,0)/dataArray.length);

//AE2_3

function findMinimun(values){
    return values.reduce((acumulador, item) => acumulador < item ? acumulador : item);//si acumulador es mayor que item devuelves "?"acumulador si no ":"devuelvo item
}
console.log(findMinimun([3,5,2,8]));

//AE2_4

function findGreaterThan(x,values){
    var mayores=true;
    values.reduce ((acum,item) => item < x ? mayores=false : null);    
    return mayores;

}
console.log(findGreaterThan(5,[9,1,9,6]));

//funcion flecha
/*
const findGreaterThan2=(x,values)=>{
    var mayores=true;
    values.reduce ((acum,item) => item < x ? mayores=false : null);    
    return mayores;}
    */