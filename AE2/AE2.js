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

