let array = ['Hello','apple','banana','monkey'];

for (let val in array){
    console.log(val);
    console.log(array[val]);
}


for (let val of array){
    console.log(val);
    console.log(array[val]);
}

function printNumss(num1, ...num2){
    console.log(num1, num2);
}
printNumss(1,2,3,4,5);

function sum(x,y,z){
    return x+y+z;
}


//spread Operator
console.log(sum(1,2,3));

let arr = [10,20,30];
console.log(sum.apply(null,arr));
// ==
console.log(sum(...arr));

function sums(a,b,c,d,e){
    return a+b+c+d+e;
}

let arrs = [20,30];
console.log(sums(10, ...arrs, 40, 50));

let face = ['eyes', 'nose', 'mouth'];
let head = ['hair', ...face, 'ears'];

console.log(head);