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
    const feedback = document.getElementById("formFeedback");

    if (!nome || !contato || !servico || !detalhes) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let mensagem = "";
    switch (servico) {
        case "Manutenção de computadores e notebooks":
            mensagem = `Olá, meu nome é ${nome}.\nPreciso de manutenção em computador/notebook.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Instalação de câmeras CFTV":
            mensagem = `Olá, meu nome é ${nome}.\nGostaria de solicitar orçamento para instalação/manutenção de câmeras CFTV.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Cabeamento e redes":
            mensagem = `Olá, meu nome é ${nome}.\nPreciso de serviços de infraestrutura de redes/cabeamento.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Suporte técnico para empresas":
            mensagem = `Olá, meu nome é ${nome}.\nGostaria de suporte técnico para empresa.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Controle de acesso":
            mensagem = `Olá, meu nome é ${nome}.\nTenho interesse em soluções de controle de acesso.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Configuração de servidores e backups":
            mensagem = `Olá, meu nome é ${nome}.\nPreciso de configuração de servidores e backup.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Manutenção de impressoras":
            mensagem = `Olá, meu nome é ${nome}.\nPreciso de manutenção em impressora.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        case "Consultoria em TI":
            mensagem = `Olá, meu nome é ${nome}.\nGostaria de consultoria em TI.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            break;
        default:
            mensagem = `Olá, meu nome é ${nome}.\nGostaria de solicitar um orçamento para: ${servico}.\nMeio de contato: ${contato}\nDetalhes do problema: ${detalhes}`;
    }

    const url = `https://wa.me/5534997227301?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
    modal.style.display = "none";
    form.reset();
    if (feedback) {
        feedback.textContent = "Mensagem enviada! Você será redirecionado para o WhatsApp.";
        feedback.style.display = "block";
        setTimeout(() => feedback.style.display = "none", 4000);
    }
});

// Botão flutuante WhatsApp em todas as páginas
const btnOrcamento = document.getElementById("btnOrcamento");
if (btnOrcamento) {
    btnOrcamento.addEventListener("click", () => {
        window.open("https://wa.me/5534997227301?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
    });
}
