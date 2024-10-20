// Dados dos produtos
const products = [
  {
    id: 1,
    name: "Canva Pro",
    price: 15.9,
    description:
      "Crie designs incríveis com recursos premium e ferramentas avançadas de edição.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjW7pHbZAIeGR54U3K4OCy8B83Vg1204EUw&s",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540515.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510o7hMabg1e86304AC98`,
  },
  {
    id: 2,
    name: "Capcut Pro",
    price: 19.9,
    description:
      "Edite vídeos facilmente com efeitos especiais, músicas e uma interface intuitiva.",
    image:
      "https://dcdn.mitiendanube.com/stores/002/385/428/products/2-db05415368daf7aa9d17146236794729-1024-1024.png",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540519.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510HBOqpv4d2H63040792`,
  },
  {
    id: 3,
    name: "ChatGPT Plus",
    price: 29.9,
    description:
      "Obtenha respostas rápidas e precisas com acesso prioritário e desempenho otimizado.",
    image:
      "https://dandelions.co.jp/blog/wp/wp-content/uploads/2024/06/image-3.png",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540529.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO621405106FWeCMIeiL63043781`,
  },
  {
    id: 4,
    name: "Combo Expert",
    price: 45.9,
    description: "Aproveite tudo das melhores ferramentas desse mercado.",
    image: "./assets/combo+total.jpg",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540545.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO621405106VXfB4Dkhj6304AE01`,
  },
  {
    id: 5,
    name: "Combo Editor",
    price: 32.9,
    description: "Aproveite tudo das melhores ferramentas desse mercado.",
    image: "./assets/combo+canva+capcut.jpg",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540532.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO621405109Cft5jNuwn6304AF45`,
  },
  {
    id: 6,
    name: "Combo Designer",
    price: 32.9,
    description: "Aproveite tudo das melhores ferramentas desse mercado.",
    image: "./assets/combo+canva+chatgpt.jpg",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540532.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO621405109Cft5jNuwn6304AF45`,
  },
  {
    id: 7,
    name: "Combo VideoMaker",
    price: 32.9,
    description: "Aproveite tudo das melhores ferramentas desse mercado.",
    image: "./assets/combo+chatgpt+capcut.jpg",
    budge: "Anual",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540532.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO621405109Cft5jNuwn6304AF45`,
  },
  {
    id: 8,
    name: "Gerador de Link",
    price: 0,
    description: "Crie links personalizado para whastApp em poucos passos.",
    image: "./assets/gerador-de-link.jpg",
    budge: "Gratuito",
    button: "Acessar",
    href: "./gerador-de-link/index.html",
  },
  {
    id: 9,
    name: "Criacão de Filtro",
    price: 12.9,
    description:
      "Com esse mini treinamento você já vai conseguir criar seus próprios filtros e até mesmo vendê-los",
    image:
      "https://static-media.hotmart.com/CQ4chJS9uQPfckKKE3YINruaEx8=/600x600/smart/filters:format(jpg):background_color(white)/hotmart/product_pictures/36c6c656-0214-4875-b609-ed5d19585a00/PROFILEFILTROS.png",
    budge: "Curso",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540512.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510U59Bxjnt7t6304F14D`,
  },
  {
    id: 10,
    name: "Designer 3X",
    price: 12.9,
    description:
      "Curso e Web Design voltado para criação e manipulação de imagens e implemntação no wordpress com elementor pro",
    image:
      "https://hotmart.s3.amazonaws.com/product_pictures/016e3502-f683-429d-845f-ad1d702fbdfc/JPGLogodoCurso.jpg",
    budge: "Curso",
    button: "Comprar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540512.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510U59Bxjnt7t6304F14D`,
  },
  {
    id: 11,
    name: "Canva Pro Teste",
    price: 0,
    description:
      "Clique em acessar para acessar uma turma de teste com tudo do canva pro liberado. Lembrando essa e uma turma de teste",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjW7pHbZAIeGR54U3K4OCy8B83Vg1204EUw&s",
    budge: "Teste",
    button: "Acessar",
    href: `https://www.canva.com/brand/join?token=X4CAsfBfLb-aIUbV1o_34Q&brandingVariant=edu&invitationDestinationType=group`,
  },
  {
    id: 12,
    name: "Pack para Designer PRO",
    price: 9.9,
    description:
      "Mais de 1TB de arquivos incluindo, PSD`s, textura, vfx, mockups e muito mais.",
    image:
      "https://packdodesign.com/wp-content/uploads/2021/04/packdodesignbox.png",
    budge: "Pack",
    button: "Acessar",
    href: `./pack-de-designer/index.html`,
  },
  {
    id: 13,
    name: "A Forja - O poder da ...",
    price: 0,
    description:
      "Assista agora o filme que tem emocianado e transformado muitas pessoas.",
    image:
      "https://br.web.img2.acsta.net/img/67/e4/67e451cd6d1ceb7a0d2d5cdd4ef50317.jpg",
    budge: "Filme",
    button: "Acessar",
    href: `./A-Forja-O-Poder-da-transformacao/index.html`,
  },
  {
    id: 14,
    name: "Pack para Designer",
    price: 0,
    description:
      "Acesse o PACK GRATUÍTO para desigenr.",
    image:
      "https://nathaliaribeiro.com.br/wp-content/uploads/2020/11/anuncio-pack-psd.png",
    budge: "Pack",
    button: "Acessar",
    href: `./pack-gratuito-de-designer`,
  },
];

const filterSelect = document.getElementById("filter");
const productsContainer = document.getElementById("products");

// Função para criar o HTML de um produto
function createProductHTML(product) {
  return `
    <div class="border-animate">
      <div class="product">
        <div class="budge ${product.budge}">${product.budge}</div>
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p class="description">${product.description}</p>
        <p>R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        <button onclick="handleButtonClick(${product.id})">${product.button}</button>
      </div>
    </div>`;
}

// Função para renderizar produtos com base no filtro
function renderProducts(filteredProducts) {
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    productsContainer.innerHTML += createProductHTML(product);
  });
}

// Evento de mudança no filtro
filterSelect.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.budge === selectedCategory);
  renderProducts(filteredProducts);
});

// Renderiza todos os produtos ao carregar a página
renderProducts(products);

// Modais e funcionalidade de pagamento
const modal = document.getElementById("modal");
const paymentModal = document.getElementById("payment-modal");
const span = document.querySelector(".close");
const closePaymentModal = document.querySelector(".close-payment-modal");
let currentPixCode = "";

// Função para abrir o modal de produto
function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-description").textContent = product.description;
  document.getElementById("modal-product-price").textContent = product.price.toFixed(2);
  document.getElementById("modal-product-image").src = product.image;

  currentPixCode = product.pix; // Armazena o código PIX do produto
  modal.style.display = "block";
}

// Função para abrir a janela de pagamento e gerar o QR Code
document.getElementById("pay-button").addEventListener("click", () => {
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Limpa o QR Code anterior
  new QRCode(qrcodeContainer, {
    text: currentPixCode,
    width: 200,
    height: 200,
  });

  modal.style.display = "none"; // Fecha o modal de produto
  paymentModal.style.display = "block"; // Abre o modal de pagamento
});

// Funções para fechar os modais
span.onclick = () => { modal.style.display = "none"; };
closePaymentModal.onclick = () => { paymentModal.style.display = "none"; };
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
  if (event.target === paymentModal) paymentModal.style.display = "none";
};

// Função para copiar o código PIX para a área de transferência
document.getElementById("copy-pix").addEventListener("click", () => {
  navigator.clipboard.writeText(currentPixCode).then(() => {
    alert("Código PIX copiado para a área de transferência!");
  });
});

// Função para enviar comprovante via WhatsApp
document.getElementById("whatsapp-button").addEventListener("click", () => {
  const productName = document.getElementById("modal-product-name").textContent;
  const price = document.getElementById("modal-product-price").textContent;

  const timestamp = Date.now(); // Gera um timestamp único
  const randomNum = Math.floor(Math.random() * 1000); // Número aleatório
  const identification = timestamp + randomNum; // ID único para referência

  const message = `Olá Gabriel, fiz o pagamento e estou enviando o comprovante do produto abaixo:
    
*Nome:* ${productName}
*Preço:* R$ ${price}
*Código de Identificação:* ${identification}

Estou aguardando os dados para o meu acesso.`;

  const whatsappUrl = `https://wa.me/5531983272409?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  setTimeout(() => {
    window.location.reload(); // Recarrega a página após 3 segundos
  }, 3000);
});

// Função para lidar com o clique no botão do produto
function handleButtonClick(productId) {
  const product = products.find((p) => p.id === productId);
  if (product.href) {
    window.open(product.href, "_blank"); // Abre o link do produto em uma nova aba
  } else {
    openModal(productId); // Abre o modal de produto
  }
}