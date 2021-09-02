$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    responsive: {
        0: { // quando a tela tiver mais de 0px
            items: 1 // colocar 1 item na tela
        },
        600: { // quando a tela tiver mais de 600px
            items: 3 // colocar 3 itens na tela
        },
        1000: { // quando a tela tiver mais de 1000px
            items: 5 // colocar 5 itens na tela
        }
    }
})