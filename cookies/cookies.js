// Seleciona o popup e o botão de aceitação
const cookiePopup = document.getElementById('cookiePopup');
const acceptButton = document.getElementById('acceptCookies');

// Função para verificar se o cookie já foi aceito
function checkCookie() {
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookieAccepted) {
        cookiePopup.style.display = 'flex';
    }
}

// Função para registrar a aceitação dos cookies
acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.style.display = 'none';
});

// Executa a verificação ao carregar a página
window.onload = checkCookie;
