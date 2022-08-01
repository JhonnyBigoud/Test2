// TENTATIVES NON FRUCTUEUSES

// var images = [
//     "images/background.jpg",
//     "images/bg1",
//     "images/bg2",
//     "images/bg3",
//     "images/bg4",
//     "images/bg5",
//     "images/bg6",
//     "images/bg7",
//     "images/bg8",
//   ]

// var imageHead = document.getElementById("header");

// var i = 0;
// chnageHeaderImage(function() {
//       imageHead.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 1000);

// var i = 0;
// var images = [
//         './images/bg1.jpg',
//         './images/bg2.jpg',
//         './images/bg3.jpg',
//         './images/bg4.jpg',
//         './images/bg5.jpg',
//         './images/bg6.jpg',
//         './images/bg7.jpg',
//         './images/bg8.jpg',
//     ];
// var time = 2000;


//     function changeImg() {
//         document.slide.src = images[i];

//         if (i < images.length -1) {
//             i++;
//         }
//         else {
//             i =0;
//         }
//             setTimeout("changeImg()",time);
//     }

//     window.onload = changeImg;

// THE GOOD ONE !

function changeHeaderImage() {

    const images = [

        'url("./images/bg0.jpg")',
        'url("./images/bg1.jpg")',
        'url("./images/bg2.jpg")',
        'url("./images/bg3.jpg")',
        'url("./images/bg4.jpg")',
        'url("./images/bg5.jpg")',
        'url("./images/bg6.jpg")',
        'url("./images/bg7.jpg")',
        'url("./images/bg8.jpg")',
        'url("./images/bg9.jpg")',
    ]

    const header =  document.getElementById('header');
    const bg = images[Math.floor(Math.random()*images.length)];
    header.style.backgroundImage = bg;
}

setInterval(changeHeaderImage, 3000);



// Fonction Caroussel

const items = document.querySelectorAll('img.eleanor');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count = 0;

function nextSlide() {
    items[count].classList.remove('active');
    
    if (count < nbSlide -1) {
        count++;
    }
    else {
        count = 0;
    }
    
    items[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', nextSlide)

function previousSlide() {
    items[count].classList.remove('active');

    if (count >0) {
        count--;
        console.log(count);

    }
    else {
        count = nbSlide -1;
        console.log(count);
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', previousSlide)


//Changement input = date au clic

function changeInputType(input) {
    input.type = "date";
}

let inputs = document.getElementsByClassName("inputana");
for(let i = 0; i<inputs.length; i++) {
    inputs[i].addEventListener("focus",function(){changeInputType(this);});
}

changeInputType();