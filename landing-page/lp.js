const swiper = new Swiper('.mySwiper', {
    loop: true, // Ativa o loop infinito
    loopAdditionalSlides: 1, // Mantém os slides duplicados para transição suave
    speed: 1000, // Velocidade da transição (1 segundo)
    autoplay: {
        delay: 0, // Sem atraso entre os slides
        disableOnInteraction: false,
    },
    slidesPerView: 4, // Quantidade de slides visíveis ao mesmo tempo
    spaceBetween: 10, // Espaço entre os slides
    freeMode: true, // Permite rolagem contínua sem travas
    freeModeMomentum: false, // Remove inércia para fluxo constante

});
