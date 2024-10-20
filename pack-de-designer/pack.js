const products = [
    {
        id: 1,
        name: "Mockup",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/19MZGfPl4dCajNeUlgtV1brIPAHmgsTcA`,
    },
    {
        id: 2,
        name: "Texturas",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1a657gW-SoQNlKap68na8qb6edB9WR0cT`,
    },
    {
        id: 3,
        name: "PSD`s",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1qtdh6pvoygtmJFx1ITuXMaEicxYmfbmz`,
    },
    {
        id: 4,
        name: "Fontes",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/14uLjOWFPT_DDFOxg18mlIOy_rBLbKF9Z`,
    },
    {
        id: 5,
        name: "Luzes",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1IiA14hAevV_U1q014_f135Wk839CFbYl`,
    },
    {
        id: 6,
        name: "Stickers",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1A1bI_QF18DdLGteWY-grlLzweArIrU1F`,
    },
    {
        id: 7,
        name: "Luts",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1-aXcPNqQ1F6UZIpFBgSs1Tmm4YL08m-p`,
    },
    {
        id: 8,
        name: "Backgrounds Abstract",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1jJr_gsP3Gv_Jub3GIRr65EFu6cn_nLaG`,
    },
    {
        id: 9,
        name: "Brushes",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1_nN2wumwVJSXIEhtVlqnzchDdff1tl2T`,
    },
    {
        id: 10,
        name: "Fotos de Artistas",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1xwV2aJvwGr-PC7md1aLR9UNwhGYXCjqJ`,
    },
    {
        id: 11,
        name: "Letras 3D",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1n6MtNd2JojohhWrJA6pMQbWskoJoWiiA`,
    },
    {
        id: 12,
        name: "Gradient Map",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1p722Fo4IYZIQSKTBDMQC0hdm6myhYEyx`,
    },
    {
        id: 13,
        name: "Cenários para manipulação",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1BQdTruNRMKqtZUDHvba_zaUxvYK5IBpj`,
    },
    {
        id: 14,
        name: "Fitas",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1dC8ZcIhC9RrWvYGtNTSPxFTXB4D6nqG_`,
    },
    {
        id: 15,
        name: "Styles",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1ZUuz2AxOkLRiNfEk74tSn6qdtMwOmfCW`,
    },
    {
        id: 16,
        name: "Chrome Text",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1G2zggXuAVwFdktCNMruACS7iGIJNsqZm`,
    },
    {
        id: 17,
        name: "Actions",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/1Fk2-UMT0iNFHkw3g5U5siO2zg8qx1QNw`,
    },
    {
        id: 18,
        name: "PSD`s Esportivos",
        button: "Acessar",
        href: `https://drive.google.com/drive/folders/112ghnUBBSTWkZmYIDVB7DI5r_4YoNSjQ`,
    },
    {
        id: 19,
        name: "Portifólio Editável",
        button: "Acessar",
        href: `https://drive.google.com/file/d/10YfAge1AeCPbGEG5GTQJ0-06Kfs0LVGn/edit`,
    },
    {
        id: 20,
        name: "Pacote de Planilhas",
        button: "Acessar",
        href: `https://drive.google.com/file/d/11bFMgy3cCDqACU_zsAbxozyojLK6arEc/view`,
    },

]



// Dados de login
const validUsername = 'NewUser';
const validPassword = '@Brasil2024';

// Função para verificar o estado de autenticação
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
        document.getElementById('login-container').classList.add(`hidden`);
        document.getElementById('container').classList.remove(`hidden`) // Mostra o conteúdo
        document.getElementById('header').classList.remove(`hidden`) // Mostra o conteúdo

    }
}

// Chama a função de verificação de autenticação ao carregar a página
window.onload = checkAuth;

document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isAuthenticated', 'true'); // Salva a autenticação no localStorage
        setTimeout(() => {
            document.getElementById('login-container').classList.add(`hidden`);
            document.getElementById('container').classList.remove(`hidden`) // Mostra o conteúdo
            document.getElementById('header').classList.remove(`hidden`) // Mostra o conteúdo
        }, 3000
        )
    } else {
        document.getElementById('error-message').style.display = 'block'; // Exibe mensagem de erro
        document.getElementById('adesao').style.display = 'block'; // Exibe mensagem de erro
        setTimeout(() => {
            window.location.reload()

        }, 5000)
    }
});

// Botao adquiri

document.getElementById('access-button').addEventListener('click', function () {
    const contato = `https://wa.me/5531983272409?text=Ol%C3%A1%20gostaria%20de%20adquirir%20um%20acesso%20ao%20*PACK%20DE%20DESIGNER%20PRO*%20Como%20fa%C3%A7o%3F`
    alert(`Estamos encaminhando você ao whastApp do administrador. Aguarde!`)
    window.open(contato, `_blank`)
})

// Função para criar o HTML de um produto
function createProductHTML(product) {
    return `
          <div class="border-animate">
              <div class="product">
                  <h1>${product.name}</h1s>
                  <h2>${product.name}</h2>
                  <button onclick="handleButtonClick(${product.id})">${product.button
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
        window.open(product.href, "_blank"); //abre o link
    }
}

// Inserir produtos na página
const productsContainer = document.getElementById("products");
products.forEach((product) => {
    productsContainer.innerHTML += createProductHTML(product);
});