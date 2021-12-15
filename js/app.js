const body = document.querySelector("body");
const menu = document.querySelector(".menu-container");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.onclick = ()=>{
    menu.classList.add("active");
    body.classList.add("disabledScroll");
}
closeMenu.onclick = ()=>{
    menu.classList.remove("active");
    body.classList.remove("disabledScroll");

}

//carousel 02



//carousel 01

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: '2',
                slidesToScroll: '2',
                itemWidth: 150,
                duration: 1.5
              }
            },{
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 1.5
              }
            }
          ]
    });
});

/* --- Productos --- */


