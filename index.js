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
  },
];

// Função para criar o HTML de um produto
function createProductHTML(product) {
  return `
        <div class="product">
            <div class="budge">${product.budge}</div>
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="description">${product.description}</p>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="openModal(${product.id})">Comprar</button>
        </div>
    `;
}

// Inserir produtos na página
const productsContainer = document.getElementById("products");
products.forEach((product) => {
  productsContainer.innerHTML += createProductHTML(product);
});

// Funções para o modal
const modal = document.getElementById("modal");
const paymentModal = document.getElementById("payment-modal");
const span = document.getElementsByClassName("close")[0];
const closePaymentModal = document.getElementsByClassName(
  "close-payment-modal"
)[0];
let currentPixCode = "eusouonumerodopix"; // Código PIX fixo

function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-price").textContent =
    product.price.toFixed(2);
  document.getElementById("modal-product-image").src = product.image;

  modal.style.display = "block";
}

// Evento para abrir o modal de pagamento
document.getElementById("pay-button").addEventListener("click", function () {
  // Atualiza o código PIX
  currentPixCode = `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e75204000053039865802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510kiblh0KctW630413D6`;

  // Gerar QR Code
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Limpar QR code anterior
  new QRCode(qrcodeContainer, {
    text: currentPixCode,
    width: 128,
    height: 128,
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
    const message = `Olá Gabriel, fiz o pagamento e estou enviando o comprovante do produto abaixo:
    
    *Nome:* ${productName}
    *Preço:* R$ ${price}

    Estou aguardando os dados para o meu acesso.
    `;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
