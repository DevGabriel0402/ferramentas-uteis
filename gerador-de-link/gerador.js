function mascararTelefone(telefone) {
  let valor = telefone.value.replace(/\D/g, ""); // Remove tudo que não é número
  valor = valor.replace(/(\d{2})(\d)/, "($1) $2"); // Insere DDD
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Insere hífen no número
  telefone.value = valor; // Atualiza o valor do input
}
document.getElementById(`gerarLink`).addEventListener(`click`, () => {
  // Aqui pega a mascara do numero e retira para retornar somente os numeros
  const numeroWhatsApp = document
    .getElementById(`telefone`)
    .value.replace(/\D/g, "");
  const mensagem = document.getElementById(`mensagem`).value;
  const box = document.getElementById(`box-input`);
  const copyArea = document.getElementById(`copyArea`);
  const textArea = document.getElementById(`textArea`);

  const whatsappUrl = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;

  if (numeroWhatsApp == "") {
    alert(`informe um número para darmos continuidade`);
  } else {
    box.classList.add(`hidden`);
    copyArea.classList.remove(`hidden`);

    textArea.innerText = whatsappUrl;
  }
});
// Funcao para copiar
document.getElementById("copyLink").addEventListener("click", function () {
  const numeroWhatsApp = document
    .getElementById(`telefone`)
    .value.replace(/\D/g, "");
  const mensagem = document.getElementById(`mensagem`).value;

  const whatsappUrl = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;

  navigator.clipboard.writeText(whatsappUrl).then(() => {
    alert("Link copiado para a área de transferência!");
  });

  setTimeout(() => {
    window.location.reload();
  }, 3000);
});
