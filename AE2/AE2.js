//AE2_1

function deleteNumbers (valores){
        return typeof(valores) ==="string";
}

let valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newValores=valores.filter(deleteNumbers);
console.log(newValores);

