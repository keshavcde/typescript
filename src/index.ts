let x: number=1;
console.log(x);
function sum(a: number,b: number){
    return a+b;
}
console.log(sum(3,4));


function isLegal(age: number): boolean{
    if(age>18){
        return true;
    }
    return false;
}
console.log(isLegal(11))

function callafter1s(fn: ((a:number)=>void) | ((b:number)=>number)){
setTimeout(fn,2000);
}
callafter1s(function displaysum(a:  number){
    console.log("hello world" +a)
})

interface usertype{
    
        name:string,
        age: number
        
}
function hello(user:usertype){
    console.log(user.name)
}
let user={
    name:"keshav",
    age: 18
}
hello(user);

