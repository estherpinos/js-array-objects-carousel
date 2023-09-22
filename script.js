
const groupImages= document.querySelector('.group-images');
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

let conta = 0;

groupImages.innerHTML = `<img src="${images[0].image}"> <h2 id="title" class="position-absolute"></h2>
<p id="text" class="position-absolute "></p>`;

document.getElementById("title").innerHTML=images[0].title;
document.getElementById("text").innerHTML=images[0].text;



btnDown.addEventListener("click", arrowDown)

btnTop.addEventListener("click", arrowUp);

setInterval(arrowDown, 5000);


function arrowUp(){
  conta--;
  if(conta==-1){
    conta=4;
  }
  groupImages.innerHTML = `<img src="${images[conta].image}"> <h2 id="title" class="position-absolute"></h2>
<p id="text" class="position-absolute "></p>`;
document.getElementById("title").innerHTML=images[conta].title;
document.getElementById("text").innerHTML=images[conta].text;
}

function arrowDown(){
  
  conta++;
  if(conta==5){
    conta=0;
  }
  groupImages.innerHTML = `<img src="${images[conta].image}"> <h2 id="title" class="position-absolute"></h2>
  <p id="text" class="position-absolute "></p>`;
  document.getElementById("title").innerHTML=images[conta].title;
  document.getElementById("text").innerHTML=images[conta].text;
  
}
