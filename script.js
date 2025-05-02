// Elementos
const modal = document.getElementById("formModal");
const btn = document.getElementById("btnOrcamento");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("orcamentoForm");

// Abrir o modal
btn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fechar o modal ao clicar no X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Enviar formulário via WhatsApp
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const contato = document.getElementById("contato").value.trim();
    const servico = document.getElementById("servico").value.trim();
    const detalhes = document.getElementById("detalhes").value.trim();

    if (!nome || !contato || !servico || !detalhes) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const mensagem = 
        `Olá, meu nome é ${nome}.` +
        `\nGostaria de solicitar um orçamento para: ${servico}.` +
        `\nMeio de contato: ${contato}` +
        `\nDetalhes do problema: ${detalhes}`;

    const url = `https://wa.me/5534997227301?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
    modal.style.display = "none";
    form.reset();
});
