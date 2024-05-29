


var swiper=new Swiper(".mySwiper", {  //DECLARA E INSTANCIA LA VARIABLE SWIPPER
    effect: "coverflow",
    grabCursor: true,                 //APLICA PROPIEDADES QUE VIENEN DE LA LIBRERIA
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,

});