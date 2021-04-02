const menu = document.querySelector('.nav-select');
const menuButton = document.querySelector('.mobile-btn');

const MenuButtonPress = () => {
    menu.classList.toggle('pushed');
    menuButton.classList.toggle('pushed-it');
} 

menuButton.addEventListener('click', MenuButtonPress)

const signButton = document.querySelector('.main-btn');
const exButton = document.querySelector('.ex-btn');
const pageSign = document.getElementById('sign-righted');

signButton.addEventListener('click', () =>{
      pageSign.style.display = 'flex';
})

exButton.addEventListener('click', ()=>{
      pageSign.style.display = 'none';
})

window.addEventListener('click', (e)=>{
    if(e.target === pageSign){
      pageSign.style.display = 'none';
    }
})


const formSign = document.querySelector('.sign-form');//getElementById('from')
const signName = document.getElementById('name');
const signEmail = document.getElementById('email');
const signPassword = document.getElementById('password');
const signConfirmPassword = document.getElementById('password-confirmed');

function showErrors(inError, message){
  const signError = inError.parentElement;
  signError.className = 'sign-section error';

  const messageSign = signError.querySelector('p');
  messageSign.innerText = message;
}

function showValids(inValid){
  const signValid = inValid.parentElement;
  signValid.className = 'sign-section valid';
}

function checkSignRequired(InputSI){
  InputSI.forEach(function(inputed){
    if(inputed.value.trim() === ''){
      showErrors(inputed, `${fieldNameLimit(inputed)} is required`)
    }else{
      showErrors(inputed,'')
      showValids(inputed);
    }
  })
}

function checkSignLength(InputSH,min,max){
  if(InputSH.value.length < min){
    showErrors(InputSH, `${fieldNameLimit(InputSH)} must be at least ${min} characters`)
  }else if(InputSH.value.length > max){
    showErrors(InputSH, `${fieldNameLimit(InputSH)} must be less then ${max} characters`)
  }else{
    showErrors(InputSH, '')
    showValids(InputSH);
  }
}

function checkSignConfirmedPassword(InputI, InputII){
  if(InputI.value !== InputII.value){
    showErrors(InputII, 'Passwords do not match');
  }
}

function fieldNameLimit(INER){
  return INER.name.charAt(0).toUpperCase() + INER.name.slice(1);
}





formSign.addEventListener('submit', (e) => {
  e.preventDefault();

  checkSignRequired([signName, signEmail, signPassword, signConfirmPassword ]);
  checkSignLength(signName, 3, 30);
  checkSignLength(signPassword, 8, 25);
  checkSignLength(signConfirmPassword, 8, 25);
  checkSignConfirmedPassword(signPassword, signConfirmPassword);

})

let selecGalleryImg = document.querySelectorAll('.pic-section');
let imgSelector ;

selecGalleryImg.forEach(function(image,index){

  image.onclick = function(){

    imgSelector = index + 1;

    // Galery body container
    let galleryContainer = document.body;
    let ImgOfGallery = document.createElement('div');
    galleryContainer.appendChild(ImgOfGallery);
    ImgOfGallery.setAttribute('class', 'gallery-container');
    ImgOfGallery.setAttribute('onclick', 'closeGallery()');

    // Selected Image shown
    let galleyImg = image.firstElementChild.cloneNode();
    ImgOfGallery.appendChild(galleyImg);
    galleyImg.classList.remove('img-section');
    galleyImg.classList.add('popup-img');
    galleyImg.setAttribute('id', 'remove-id');

    galleyImg.onload = function(){

      let buttonNextGallery = document.createElement('a');  
      buttonNextGallery.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';
      galleryContainer.appendChild(buttonNextGallery);
      buttonNextGallery.setAttribute('class', 'gallery-btn-next');
      buttonNextGallery.setAttribute('onclick', 'changeImage(1)');

      let buttonPrevGallery = document.createElement('a');
      buttonPrevGallery.innerHTML = '<i class="fas fa-arrow-alt-circle-left"></i>';
      galleryContainer.appendChild(buttonPrevGallery);
      buttonPrevGallery.setAttribute('class', 'gallery-btn-prev');
      buttonPrevGallery.setAttribute('onclick', 'changeImage(0)')

    }
  }
})

function closeGallery(){
  document.querySelector('.gallery-container').remove();
  document.querySelector('.gallery-btn-next').remove();
  document.querySelector('.gallery-btn-prev').remove();
}


function changeImage(changeNum){
  
  document.querySelector('#remove-id').remove();

  let selectedGalleryImg = document.querySelector('.gallery-container')
  let newImg = document.createElement('img');
  selectedGalleryImg.appendChild(newImg);

  let calcGalImg;
  if(changeNum = 1){
    calcGalImg = imgSelector + 1;
    if(calcGalImg > selecGalleryImg.length){
      calcGalImg = 1;
    }
  }else if(changeNum === 0){
    calcGalImg = imgSelector - 1;
    if(calcGalImg < 1){
      calcGalImg = selecGalleryImg.length;
    }
  }

  newImg.setAttribute('src', 'images/img-'+calcGalImg+'.jpg');
  newImg.setAttribute('class', 'popup-img');
  newImg.setAttribute('id', 'remove-id');

  imgSelector = calcGalImg;

}