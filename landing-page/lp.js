const swiper = new Swiper('.mySwiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    allowTouchMove: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


});

document.getElementById('buttonCta').addEventListener('click', () => {
  document.getElementById('section-price').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('basicBtn').addEventListener('click', () => {
  window.open('https://pay.kiwify.com.br/aIB3jEQ', '_blank')
})

document.getElementById('premiumBtn').addEventListener('click', () => {
  window.open('https://pay.kiwify.com.br/NnBtroN', '_blank')
})

document.getElementById('plusBtn').addEventListener('click', () => {
  window.open('https://pay.kiwify.com.br/9x3SQIB', '_blank')
})


const depoimentos = [
    {
        nome: "Ana Oliveira",
        foto: "https://randomuser.me/api/portraits/women/1.jpg",
        texto: "O Pack do Designer me ajudou a otimizar meu processo criativo! Agora, consigo entregar projetos com mais rapidez e qualidade.",
    },
    {
        nome: "Lucas Mendes",
        foto: "https://randomuser.me/api/portraits/men/2.jpg",
        texto: "Os mockups e fontes do pack deixaram meu portfólio mais atraente e profissional. Superou minhas expectativas!",
    },
    {
        nome: "Bianca Costa",
        foto: "https://randomuser.me/api/portraits/women/3.jpg",
        texto: "Aumentei minha produtividade rapidamente com o Pack do Designer. Meus clientes perceberam a diferença!",
    },
    {
        nome: "Rafael Santana",
        foto: "https://randomuser.me/api/portraits/men/4.jpg",
        texto: "A seleção de ícones e modelos de flyer em PSD é incrível! Eles se encaixam perfeitamente nos meus projetos digitais.",
    },
    {
        nome: "Carolina Moreira",
        foto: "https://randomuser.me/api/portraits/women/5.jpg",
        texto: "O Pack do Designer me ajudou a elevar o nível das minhas entregas na faculdade. Um achado para estudantes!",
    },
];

// Função para gerar as estrelas
function gerarEstrelas(qtd) {
    return Array(qtd)
        .fill("★")
        .join("");
}

// Função para renderizar os depoimentos no HTML
function renderizarDepoimentos() {
    const depoimentosList = document.getElementById("depoimentos-list");
    depoimentosList.innerHTML = depoimentos
        .map(({ nome, foto, texto, estrelas }) => `
        <div class="depoimento">
          <img src="${foto}" alt="${nome}" class="foto">
          <div class="depoimento-conteudo">
            <h3>${nome}</h3>
            <p>${texto}</p>
          </div>
        </div>
      `
        )
        .join("");
}

// Chamada da função ao carregar a página
window.onload = renderizarDepoimentos;
