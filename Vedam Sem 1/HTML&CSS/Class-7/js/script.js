// function declaration

function greet(a = "100"){
console.log("param :" , a);
}
greet();
greet(1);
greet(0,2,3,6,"ABC");

console.log(greet)