let navBar = document.querySelector('.header-3 .navbar');
let menu = document.querySelector('#menu-bar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
};

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navBar.classList.remove('active');

    if(window.scrollY > 120) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
    
    if(window.scrollY > 120) {
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

};

// slider home

var swiper = new Swiper(".home-slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    },
  });


// count-down

let countDate = new Date('october 10, 2021 00:00:00').getTime();

function countDown(){

    let  now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor(gap % (day) / (hour));
    let m = Math.floor(gap % (hour) / (minute));
    let s = Math.floor(gap % (minute) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    countDown();
},1000);