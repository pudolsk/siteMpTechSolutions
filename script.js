// Corrige escopo duplicado para variáveis globais
// Unifica e otimiza o controle de modais e botões
window.addEventListener('DOMContentLoaded', function() {
    // Botão flutuante/modal orçamento universal
    var btnsOrcamento = document.querySelectorAll('#btnOrcamento');
    var modal = document.getElementById("formModal");
    var closeBtn = document.querySelector("#formModal .close");
    var form = document.getElementById("orcamentoForm");

    btnsOrcamento.forEach(function(btnOrcamento) {
        if (btnOrcamento && modal) {
            btnOrcamento.addEventListener("click", function() {
                modal.style.display = "flex";
            });
        } else if (btnOrcamento && !modal) {
            btnOrcamento.addEventListener("click", function() {
                window.open("https://wa.me/5534997227301?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
            });
        }
    });
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
    window.addEventListener("click", function(e) {
        if (modal && e.target === modal) {
            modal.style.display = "none";
        }
    });
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var nome = document.getElementById("nome").value.trim();
            var contato = document.getElementById("contato").value.trim();
            var servico = document.getElementById("servico").value.trim();
            var detalhes = document.getElementById("detalhes").value.trim();
            if (!nome || !contato || !servico || !detalhes) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            var mensagem = `Olá, meu nome é ${nome}.\nQuero solicitar orçamento para: ${servico}.\nContato: ${contato}\nDetalhes: ${detalhes}`;
            var url = `https://wa.me/5534997227301?text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
            modal.style.display = "none";
            form.reset();
        });
    }

    // Modal explicação de serviço (funciona em todas as páginas)
    var modalServico = document.getElementById('modalServico');
    var closeServico = modalServico ? modalServico.querySelector('.close') : null;
    var btnServicoWhats = document.getElementById('btnServicoWhats');
    var modalServicoTexto = document.getElementById('modalServicoTexto');
    var modalServicoTitle = document.getElementById('modalServicoTitle');
    var servicoExplicacoes = {
        computador: {
            titulo: 'Manutenção de computadores e notebooks',
            texto: 'Diagnóstico, limpeza, formatação, upgrade, remoção de vírus, troca de peças e otimização de desempenho para computadores e notebooks.'
        },
        cftv: {
            titulo: 'Instalação e manutenção de câmeras CFTV',
            texto: 'Projetos, instalação, configuração e manutenção de sistemas de câmeras de segurança para residências e empresas.'
        },
        redes: {
            titulo: 'Infraestrutura de redes e cabeamento',
            texto: 'Montagem, organização e manutenção de redes cabeadas e Wi-Fi, cabeamento estruturado, racks e pontos de rede.'
        },
        suporte: {
            titulo: 'Suporte técnico para empresas',
            texto: 'Atendimento remoto e presencial, resolução de problemas, manutenção preventiva e suporte em TI para empresas.'
        },
        acesso: {
            titulo: 'Controle de acesso',
            texto: 'Soluções para controle de entrada e saída de pessoas, instalação de fechaduras eletrônicas, biometria e cartões.'
        },
        impressora: {
            titulo: 'Manutenção de impressoras',
            texto: 'Conserto, limpeza, troca de peças e configuração de impressoras de diversas marcas e modelos.'
        },
        servidor: {
            titulo: 'Backup e configuração de servidores',
            texto: 'Implantação, configuração e manutenção de servidores, rotinas de backup e segurança de dados.'
        },
        consultoria: {
            titulo: 'Consultoria em TI',
            texto: 'Avaliação, planejamento e implementação de soluções tecnológicas sob medida para o seu negócio.'
        },
        sites: {
            titulo: 'Criação de sites personalizados',
            texto: 'Desenvolvimento de sites institucionais, landing pages e portfólios modernos, responsivos e otimizados para o seu negócio ou projeto.'
        }
    };
    // Adiciona evento de clique para todos os cards de serviço (home e serviços)
    var servicoCards = document.querySelectorAll('.servico-item[data-servico]');
    servicoCards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Evita abrir o modal ao clicar em links internos (se houver)
            if (e.target.tagName === 'A') return;
            var tipo = card.getAttribute('data-servico');
            if (servicoExplicacoes[tipo] && modalServico && modalServicoTitle && modalServicoTexto && btnServicoWhats) {
                modalServicoTitle.textContent = servicoExplicacoes[tipo].titulo;
                modalServicoTexto.textContent = servicoExplicacoes[tipo].texto;
                btnServicoWhats.href = 'https://wa.me/5534997227301?text=' + encodeURIComponent('Olá! Gostaria de solicitar orçamento para ' + servicoExplicacoes[tipo].titulo + '.');
                modalServico.style.display = 'flex';
                // Foco acessível
                modalServico.querySelector('.close').focus();
            }
            e.preventDefault();
            e.stopPropagation();
        });
        // Acessibilidade: abrir modal com Enter/Space
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
            }
        });
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.innerText);
    });
    if (closeServico && modalServico) {
        closeServico.addEventListener('click', function() {
            modalServico.style.display = 'none';
        });
    }
    window.addEventListener('click', function(e) {
        if (modalServico && e.target === modalServico) {
            modalServico.style.display = 'none';
        }
    });

    // Menu expansivo responsivo
    const menuToggle = document.getElementById('menuToggle');
    const menuCentral = document.getElementById('menuCentral');
    if (menuToggle && menuCentral) {
        menuToggle.addEventListener('click', () => {
            menuCentral.classList.toggle('open');
        });
        // Fecha o menu ao clicar em um link (mobile UX)
        menuCentral.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuCentral.classList.remove('open');
            });
        });
    }

    // Seleciona serviço no formulário ao clicar no card (desktop/mobile)
    var servicoItems = document.querySelectorAll('.servico-item');
    servicoItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            // Busca o nome do serviço (compatível com grids diferentes)
            var nomeServico = item.querySelector('.servico-nome')?.textContent?.trim() || item.querySelector('span:last-child')?.textContent?.trim();
            var select = document.getElementById('servico');
            if (nomeServico && select) {
                for (var i = 0; i < select.options.length; i++) {
                    if (select.options[i].text.trim() === nomeServico) {
                        select.selectedIndex = i;
                        break;
                    }
                }
            }
            // Não abre modal de orçamento automaticamente, pois já há lógica para modal explicação
        });
    });

    // Fecha todos tooltips ao clicar fora (mobile)
    document.body.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) {
            servicoItems.forEach(function(item) {
                if (e.target.classList && e.target.classList.contains('servico-whats')) return;
                item.classList.remove('mostrar-desc');
            });
        }
    });
    // Acessibilidade: permite fechar com ESC
    servicoItems.forEach(function(item) {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                item.classList.remove('mostrar-desc');
            }
        });
    });
});
