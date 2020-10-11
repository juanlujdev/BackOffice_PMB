//Ejercicio1-1
/*
const valores = [ "Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
function string(arr){
   return arr.filter(typeof (item) === "string"); 
}

console.log(string(valores));
*/
//Ejer1_1.1flecha
const valores2 = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
const string2=(arr) => arr.filter(item => typeof (item) === "string");
console.log(string2(valores2));

//Ejercio1_2
const valores3 = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
const pares=(arr) => arr.filter(item => typeof (item) !== "string" && item%2==0);
console.log(pares(valores3));

//Ejercicio2
const dataArray=[3,3,5,2];
const average = (arr) => (arr.length > 0 ? arr.reduce((acc,index) => acc+index)/arr.length : "undefined");
console.log(average(dataArray));

//Ejercicio3
const values= [4,5,8];
const findMinimum = (arr) => arr.reduce((acc,item) => Math.min(acc,item));
console.log(findMinimum(values));

