const navSlide = () => {
    const aside = document.querySelector('.sidebar');
    const burger = document.querySelector('.burger');

    const nav = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
        aside.classList.toggle('side-active');

        nav.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation ='';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.4}s`;
            }
        });
    });
}

navSlide();