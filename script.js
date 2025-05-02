const modal = document.getElementById("formModal");
const btn = document.getElementById("btnOrcamento");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

document.getElementById("orcamentoForm").onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const detalhes = document.getElementById("detalhes").value;

    const mensagem = `Olá, meu nome é ${nome}. Gostaria de solicitar um orçamento para: ${servico}. Detalhes: ${detalhes}`;
    const url = `https://wa.me/5534997227301?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};
