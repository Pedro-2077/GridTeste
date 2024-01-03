function menumobile(){

    var navbar = document.querySelector('.nav-List')
    var screenWidth = window.innerWidth 
    if (screenWidth <= 999) {


   navbar.style.visibility = (navbar.style.visibility === 'visible') ? 'hidden' : 'visible'; //Ternario
    console.log('clicou')
    }else if(screenWidth >= 999){
    navbar.style.visibility = 'visible';
    }
}
var mobileMenu = document.querySelector('.mobile-Menu');
mobileMenu.addEventListener('click', menumobile ); 

