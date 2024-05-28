const laptop={    //key value colln
    model:'xxxx',
    price:450000,
    color:'white'           // 0. OBJECT IN JS 
}

console.log(laptop.model);
console.log(laptop.color);

// 1. Variables in JS 

//var (Old JS )
//,let,const (MOdern jS )


let lang="Javscript";
console.log(lang);

let lang2;
console.log(lang2);     //camelCase 

const secinMin=60;
// secinMin=45; // can't do reassignment in const variable 
console.log(secinMin);

//var has a functn scope 
if(true){
//    let  age=45;
    var age=34; //
}

console.log(age);// var variables accessed outside the block it has functn scope only no block scope
//let & const  has a block scope 


function helo(){
    var pno=8920398843; //var variables can't be acceseed outside functn scope 
    //however if in block it can be accessed 
} 


// console.log(pno);

const data={Name:'Harsh',Age:34}; //object 


//HOISTING 
// console.log(greeting);
//var greeting="Hello"; // undefined 
let greeting="Hello";// CAn;t acess greeting ref. not found [TDR] Temporal Dead ZOne 


//data type in js (dynamic typing)
//primitive data type 

///1. Number (2**53-1) Number.MAX_SAFE_INTEGER
let page=54;
let val=-32;
let p=23.2;

//2. String
let Name="Harsh";

//3. Boolean (true/false)
let isUserLogged=true;
let hasPermission=false;


//4. Undefined 
let gat;
console.log(gat); // o/p as undefined 

//5. BigInt 
//6. Symbol
//Unique

//2. STRUCTURAL TYPE
//1. Object 
    //1.1 Function
    //NOn-data structure 
    //callable

    //1.2 Arrays
    const num=[1,2,3,'python',{name:"Harsh"}]; // Arrays are objects 

    //1.3 Maps
    //1,4 SET 
    //1.5  DATE object 

//3 Structural Root
// 1. Null empty value


// *******10 OPERATORS
/*
1. Assignment Operators 
2. COmparison Operators
3. ARithematic 
4. Bitwise 
5. Logical (&&,||,,!)
6.String 
7. Conditional (Ternary operator )(condition?st1:st2)
8. Comma 
9. Unary 
10. Relational Operator 
*/ 

// CONDITIONAL OPERRTR 

const userRole='admin';
/*
if(userRole==='admin'){
    console.log("You are an admin");
}
else{
    console.log("You are  not an admin");
}
*/
// condn?st1:st2;
userRole==="admina"?console.log('You are admin'):console.log("You are not admin");

//Comparison OPerators 

//Equal ==
//Not equal  !=
//Strict equal ===
//Strict not  equal !==
// ...... 
console.log("EQUAL !");
console.log(4=='4'); //false 
console.log(3==3); //true
console.log(5=='5'); //true /*In Equal it checks only value and not data type */ 



console.log("STRICT EQUAL !"); 
// when JS sees diff data type with same value JS automatically cnvrts 
//it to to similar data type  this process is called coercion.
console.log(4==='4'); //false  
console.log(4===-4); //false
console.log(4==='4'); //false /*In STRict Equal it checks both value and data type */ 
//coercion is disabled when strict equal 

/*
    Recommended to use STRICT EQUAL (===) always !
*/

console.log(3>2>1);//  true>1 Coercion hoga 1>1 to false 


// ************ARRAYS *********************************************

let languages=["Python","C","Java"] //Array can contain objects , string 

console.log(languages.length) //length method
// console.log(languages[1]) C //Index if index out of bound returns undefined 
// -ve index not possible unlike Python

//FOR ADDING ITEM IN JS 
languages.push("Dart"); //adds at end

let lngth=languages.unshift("Java"); // Insert item at start and returns new length of array
console.log(languages);
console.log(lngth); //5 new len of array !

console.log(languages.pop());// removes  from last 
languages.shift(); //Removes item from first 

console.log(languages);