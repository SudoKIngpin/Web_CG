const root= document.querySelector(".root");

// console.log(root);

const bt=document.querySelector(".btn1");




function createItems(item){   //50 objects so 50 elements to be created dynamically 
    
    const card=document.createElement('div');
    card.classList.add('card');

    const photo=document.createElement('img');
    const title=document.createElement('h4');

    photo.src=item.thumbnailUrl; //dynamically updating value from API object 
    title.innerHTML=`Title No: ${item.id}: ${item.title}`;

    card.appendChild(photo);
    card.appendChild(title); // appendind each element to main card element 

    root.appendChild(card);  // finally creating root divs dynamically to obtain multiple cards with photos&title

}


function displayImages(items){
    items.forEach(item => {
        createItems(item);  
    });

}


bt.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
.then((items)=>{
    displayImages(items);
})

//50 objects photos 

})

