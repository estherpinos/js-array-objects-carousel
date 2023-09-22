
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

groupImages.innerHTML = `<h2 id="title" class="position-absolute"></h2>
<p id="text" class="position-absolute "></p>`;

let conta = 0;
for (let i = 0; i < images.length; i++) {
  const image = images[i].image;
  groupImages.innerHTML += `<img src="${image}" class="d-none">`;
  document.getElementById('title').innerHTML=images[i].title;
  document.getElementById('text').innerHTML=images[i].text;
}

let img = groupImages.getElementsByTagName("img");
let canva = document.getElementsByClassName("black-canva");
let bordo = document.getElementsByClassName("bordo");


img[conta].classList.remove("d-none");
canva[conta].classList.add("d-none");
bordo[conta].style.border = "3px solid white";


btnDown.addEventListener("click", function(){
  img[conta].classList.add("d-none");
  canva[conta].classList.remove("d-none");
  bordo[conta].style.border = "";

  conta++;
  if(conta==5){
    conta=0;
  }
  img[conta].classList.remove("d-none");
  canva[conta].classList.add("d-none");
  bordo[conta].style.border = "3px solid white";

})

btnTop.addEventListener("click", function(){
  img[conta].classList.add("d-none");
  canva[conta].classList.remove("d-none");
  bordo[conta].style.border = "";
  conta--;
  if(conta==-1){
    conta=4;
  }
  img[conta].classList.remove("d-none");
  canva[conta].classList.add("d-none");
  bordo[conta].style.border = "3px solid white";


})

