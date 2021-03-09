const menu = document.querySelector('.nav-menu');
const munuButton = document.querySelector('.mobile-menu');


const MobileMenu = ()=>{

    menu.classList.toggle('pressed')
    munuButton.classList.toggle('is-pressed')
}

munuButton.addEventListener('click' , MobileMenu)


const ScrollWindow = () =>{
    const windowScroll = window.scrollY;
    const homeScroll = document.querySelector('#Ahome');
    const aboutScroll = document.querySelector('#Aabout');
    const serviceScroll = document.querySelector('#Aservice');

    console.log(windowScroll);


    if(windowScroll < 600 && window.innerWidth > 940){
        homeScroll.classList.add('lightUp');
        aboutScroll.classList.remove('lightUp');

        return
    } else if(windowScroll < 1020 && window.innerWidth > 1020){
        aboutScroll.classList.add('lightUp');
        homeScroll.classList.remove('lightUp')
        serviceScroll.classList.remove('lightUp')
        return
    }else if(windowScroll <2700 && window.innerWidth > 940){
        serviceScroll.classList.add('lightUp');
        aboutScroll.classList.remove('lightUp');
        homeScroll.classList.remove('lightUp');

    }else{
        homeScroll.classList.remove('lightUp');
        serviceScroll.classList.remove('lightUp');
        aboutScroll.classList.remove('lightUp')
    }
    

}

window.addEventListener('scroll', ScrollWindow)



const MenuPresGo = () =>{
    const menuBactive = document.querySelector('.is-pressed')

    if(window.innerWidth < 940 && menuBactive){
        menu.classList.toggle('pressed');
        munuButton.classList.toggle('is-pressed');
        return
    }
}

menu.addEventListener('click' , MenuPresGo)