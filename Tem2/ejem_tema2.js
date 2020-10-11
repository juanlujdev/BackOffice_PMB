const x=(param1, param2, param3) =>{
    return param1+param2+param3;
}

console.log(x());

const values=[1,2,3,4,5];
console.table(values.map((item) => item+1));
const plusOne=(num)=>{
    return num+1;
}
console.log(values);

console.table(values.filter(item=>item %2 ===0));