//var, let and const 

// var no longer ussed use const and let only 
// transpiler (modern js-> old js)

//arrow functns  || One liner 

function greet(){
    console.log('Hello ');
}

greet()

const wish=(()=>{
    console.log("anonymous functn");
})();
// ();

const add=(a)=>console.log(a+a);

add(5);