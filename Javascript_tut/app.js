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
console.log(languages.length); //5 new len of array !

console.log(languages.pop());// removes  from last 
languages.shift(); //Removes first  item from first 

console.log(languages);

//loops 

for(let i=0;i<5;i++){
    console.log("Hello world in loop ");
}


let actors=[

    {name:"Actor 1 ", payment:100},
    {name:"Actor 2 ", payment:200},
    {name:"Actor 3 ", payment:300},
]


// LOOPS ||1.fOR LOOP      || 2. forEach   ||3.for of
// for(let i=0;i<actors.length;i++){        1. FOR LOOPS
//     actors[i].payment=actors[i].payment-10;
// }


// 2. forEach  
actors.forEach((actor)=>{
    // console.log(actor);
    actor.payment=actor.payment-10;

})
console.log(actors);

// 3. for of 

for(let actor of actors){
    console.log(actor.name);
}


// ..FILTER METHOD !! New Array 

const students=[
    {name:"Student 1 ", marks:55},
    {name:"Student 2 ", marks:60},
    {name:"Student 3 ", marks:45},
    {name:"Student 4 ", marks:35},
    {name:"Student 5 ", marks:25},
]

let fstud= students.filter((student)=>{
//  if (student.marks<40){
//     return true;
//  }
return student.marks<45;

})

// console.log(fstud);  

let ft=students.filter((student=>student.marks<40));
console.log(ft);

// MAP method || new array

const users=[
    { fname:'John',lname:'Doe'},

    { fname:'Tony',lname:'Stark'},

    { fname:'Wanda',lname:'Killer'}
]

const finalUsers=users.map((usery)=>{
    return {fullname:`${usery.fname} ${usery.lname} `}
})

console.log(finalUsers);


//Reduce

const movies=[
    {name:"Interstellar", budget:100},
    {name:"Inception", budget:200},
    {name:"Matrix", budget:300}
]

// let sum=0;
// movies.forEach((movie=>{
//     sum+=movie.budget;

// }))

//using reduce method 
// (accumulator , initial value of variableas 2nd parameter)

let sum=movies.reduce((acc,movie)=>{
    acc+=movie.budget;
    return acc;
    
},0)

console.log(`The budget of all movies  is :  ${sum}`);

//indexOf

const admins=[2,1,5];

const user= {name:'XYZ',id:5};

let v=admins.indexOf(user.id);// returns index of matched 
//otherwise returns -1 

const isAd=admins.indexOf(user.id)>-1;

console.log(isAd);

//includes method 

console.log(admins.includes(user.id));

//find method 
// Returns the matching objet otherwise undefined 
const userl=[
    {name:'XYc',id:1},
    {name:'afc',id:2},
    {name:'dsc',id:3},
]

const myuser=userl.find((user)=>{
    if(user.id===2){
        return true;
    }

})
console.log(myuser);

const myusern=userl.find((user)=>{
    if(user.name==="XYc"){
        return true;
    }

})

console.log(myusern);

//sort
const names=['Zishan','Jane',"harsh",'killer','georgie',"Ansh"]
names.sort();
console.log(names);
//[ 'Ansh', 'Jane', 'Zishan', 'georgie', 'harsh', 'killer' ]

//splice method

//(index, kitne elements delete krne!)

names.splice(2,3);
console.log(names);


// ******************************FUNCTIONS**********************************************************

