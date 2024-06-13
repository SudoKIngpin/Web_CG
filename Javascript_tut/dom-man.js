 
/*
1. getElementById('heading')
2. getElementsbyTagName('heading')
3. getElementByClassName('heading')
4. i .querySelector('. heading');
4. ii. .querySelector('#heading);
 5. .querySelectorAll('#heading);


TRAVERSING DOM 

1. parentNode

2. childrenNodes

3. nextElementSibling 

4. previousElementsSibling

5. innerHTML

6. .classList.add

7. .classList.remove

8. createElement 
9. .appendChild
10. insertAdjacentElement
*/


// DOM EVENTS
// 1. CLick event 


// const h3=document.querySelectorAll('#heading');


// console.log(h3);
// console.log(h3[0]);
// console.log(h3[1]);
// console.log(h3[2]);


//  const head2=document.getElementsByTagName('h1');
//  console.log(head2); //html colln

 
//  const h3=document.getElementsByClassName('header');
 
//  console.log(h3);


// const headers=document.querySelector('#heading');
// console.log(headers);

const divi = document.querySelector('.header ');
const par=divi.parentNode;
console.log(par);

const par_d=document.querySelector('.parent');

console.log((par_d.childNodes));

const head1=document.querySelector('#heading1');
const sibling=head1.nextElementSibling;
console.log(sibling);

// innerHTML
head1.innerHTML="I have changed text using js "

head1.style.color='red';
head1.style.fontSize='100px';

head1.classList.add('title');
head1.classList.add('tuttle');
// head1.classList.remove('title');


//create elements \
const newe=document.createElement('h1');
const par2=document.querySelector('.parent2');// selecting parent div 

newe.innerHTML="This heading is generated dynamically"
console.log(newe);

//appending newly created elemnt child in parent2 div 

par2.appendChild(newe);

const newe2=document.createElement('h4');
newe2.innerHTML='This is 2nd element ';
par2.appendChild(newe2);

newe.insertAdjacentElement('beforebegin',newe2);    // newe2 inserted before newe


// Events 
const btn=document.querySelector('#btn1');
btn.addEventListener('click',(event)=>{
    head1.style.fontSize='30px';
    head1.style.color='green';
    console.log("Btn Clicked!")
    console.log(event)
});