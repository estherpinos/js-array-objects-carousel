
const groupImages= document.querySelector('.group-images');
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');

const images=[
  'img/img/01.webp',
  'img/img/02.webp',
  'img/img/03.webp',
  'img/img/04.webp',
  'img/img/05.webp',
];

groupImages.innerHTML = "";

let conta = 0;
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  groupImages.innerHTML += `<img src="${image}" class="hiden">`;
}

let img = groupImages.getElementsByTagName("img");
let canva = document.getElementsByClassName("black-canva");
let bordo = document.getElementsByClassName("bordo");


img[conta].classList.remove("hiden");
canva[conta].classList.add("hiden");
bordo[conta].style.border = "3px solid white";


btnDown.addEventListener("click", function(){
  img[conta].classList.add("hiden");
  canva[conta].classList.remove("hiden");
  bordo[conta].style.border = "";

  conta++;
  if(conta==5){
    conta=0;
  }
  img[conta].classList.remove("hiden");
  canva[conta].classList.add("hiden");
  bordo[conta].style.border = "3px solid white";

})

btnTop.addEventListener("click", function(){
  img[conta].classList.add("hiden");
  canva[conta].classList.remove("hiden");
  bordo[conta].style.border = "";
  conta--;
  if(conta==-1){
    conta=4;
  }
  img[conta].classList.remove("hiden");
  canva[conta].classList.add("hiden");
  bordo[conta].style.border = "3px solid white";


})

