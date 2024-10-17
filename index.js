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
    budge: "Vitalicio",
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
    budge: "Anual",
    button: "Acessar",
    pix: `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e7520400005303986540512.905802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510U59Bxjnt7t6304F14D`,
  },
  {
    id: 10,
    name: "Designer 3X",
    price: 12.9,
    description:
      "Cursod e Web Design voltado para criação e manipulação de imagens e implemntação no wordpress com elementor pro",
    image:
      "https://hotmart.s3.amazonaws.com/product_pictures/016e3502-f683-429d-845f-ad1d702fbdfc/JPGLogodoCurso.jpg",
    budge: "Anual",
    button: "Acessar",
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
];

// Função para criar o HTML de um produto
function createProductHTML(product) {
  return `
        <div class="border-animate">
            <div class="product skeleton">
                <div class="budge ${product.budge}">${product.budge}</div>
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="description">${product.description}</p>
                <p>R$ ${product.price.toFixed(2).replace(`.`, `,`)}</p>
                <button onclick="handleButtonClick(${product.id})">${
    product.button
  }</button>
            </div>
        </div>
    `;
}

// Função para lidar com o clique no botão
function handleButtonClick(productId) {
  const product = products.find((p) => p.id === productId);

  // Verifica se o produto possui um link href
  if (product.href) {
    // window.location.href = product.href; //abre o link
    window.open(product.href, "_blank"); //abre o link
  } else {
    openModal(productId); // Abre o modal se não houver href
  }
}

// Inserir produtos na página
const productsContainer = document.getElementById("products");
products.forEach((product) => {
  productsContainer.innerHTML += createProductHTML(product);
});

// Funções para o modal
// Funções para o modal
const modal = document.getElementById("modal");
const paymentModal = document.getElementById("payment-modal");
const span = document.getElementsByClassName("close")[0];
const closePaymentModal = document.getElementsByClassName(
  "close-payment-modal"
)[0];
let currentPixCode = "";
let currentProduct = null;

function openModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  document.getElementById("modal-product-name").textContent =
    currentProduct.name;
  document.getElementById("modal-product-description").textContent =
    currentProduct.description;
  document.getElementById("modal-product-price").textContent =
    currentProduct.price.toFixed(2);
  document.getElementById("modal-product-image").src = currentProduct.image;

  // Armazenar o código PIX do produto atual
  currentPixCode = currentProduct.pix;

  modal.style.display = "block";
}

// Evento para abrir o modal de pagamento
document.getElementById("pay-button").addEventListener("click", function () {
  // Gerar QR Code
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Limpar QR code anterior
  new QRCode(qrcodeContainer, {
    text: currentPixCode,
    width: 200,
    height: 200,
  });

  modal.style.display = "none"; // Fechar o modal principal
  paymentModal.style.display = "block"; // Abrir o modal de pagamento
});

// Eventos para fechar os modais
span.onclick = function () {
  modal.style.display = "none";
};

closePaymentModal.onclick = function () {
  paymentModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == paymentModal) {
    paymentModal.style.display = "none";
  }
};

// Função para copiar o código PIX
document.getElementById("copy-pix").addEventListener("click", function () {
  navigator.clipboard.writeText(currentPixCode).then(() => {
    alert("Código PIX copiado para a área de transferência!");
  });
});

// Função para enviar mensagem pelo WhatsApp
document
  .getElementById("whatsapp-button")
  .addEventListener("click", function () {
    const productName =
      document.getElementById("modal-product-name").textContent;
    const price = document.getElementById("modal-product-price").textContent;

    const timestamp = Date.now(); // Obtém o timestamp atual em milissegundos
    const numberAleatory = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
    const identification = timestamp + numberAleatory; // Combina o timestamp com o número aleatório

    const message = `Olá Gabriel, fiz o pagamento e estou enviando o comprovante do produto abaixo:
    
*Nome:* ${productName}
*Preço:* R$ ${price}
*Código de Identificação:* ${identification}

Estou aguardando os dados para o meu acesso.
    `;
    const numberWhatsApp = "31983272409";
    const whatsappUrl = `https://wa.me/55${numberWhatsApp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  });
