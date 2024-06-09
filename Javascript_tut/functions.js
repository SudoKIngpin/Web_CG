function login(username,passwd){
    //logic

    console.log(`${username} logged in with ${passwd}`);
}


login('krish');
login('monika','');
login('harsh','secret');

function upperCase(str){
    console.log(str.toUpperCase());
}

upperCase('jaitri');
upperCase('harsh');

// function mein return ki hi line mein return value likhna wrna 
// return ke aage js automatically ; se terminaate krdrga return; 

function f(){
    return //automatically js ; lga di undefined return ki ..
     "Ghar";
}
// console.log(f());

// NaN (Not  a number )
 function calcArea(height,width=1){
    return height*width;
 }

 console.log(calcArea(30,40)); // 1200
 console.log(calcArea(30)); // 30* undefined Nan[Not a number]

 //FUNCTION DECLARATION & eXPRESSION

 //declaratn

 function login(){

 }

 //expression  {Anonymous functn }
 const login_fun=function(){
console.log('logged in');
 }

 login_fun();


 //callbacks 
 