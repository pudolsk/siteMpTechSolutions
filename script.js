window.addEventListener('DOMContentLoaded', function () {
    var whatsappPhone = '5534997227301';
    var defaultMessage = 'Olá! Gostaria de solicitar um orçamento.';
    var menuToggle = document.getElementById('menuToggle');
    var menuCentral = document.getElementById('menuCentral');
    var formModal = document.getElementById('formModal');
    var serviceModal = document.getElementById('modalServico');
    var budgetButtons = document.querySelectorAll('#btnOrcamento, [data-open="orcamento"]');
    var budgetForm = document.getElementById('orcamentoForm');
    var budgetClose = formModal ? formModal.querySelector('.close') : null;
    var serviceClose = serviceModal ? serviceModal.querySelector('.close') : null;
    var btnServicoWhats = document.getElementById('btnServicoWhats');
    var modalServicoTexto = document.getElementById('modalServicoTexto');
    var modalServicoTitle = document.getElementById('modalServicoTitle');
    var yearElements = document.querySelectorAll('.current-year');
    var navLinks = document.querySelectorAll('.menu-central a');
    var serviceCards = document.querySelectorAll('.servico-item[data-servico]');
    var serviceSelect = document.getElementById('servico');

    var servicoExplicacoes = {
        celular: {
            titulo: 'Assistência técnica para celulares',
            texto: 'Diagnóstico, manutenção e suporte técnico para celulares, com foco em restaurar funcionamento, desempenho e confiabilidade do aparelho. Atendimento comum para marcas como Samsung, Xiaomi, iPhone, Motorola e modelos similares.'
        },
        computador: {
            titulo: 'Manutenção de computadores e notebooks',
            texto: 'Diagnóstico, limpeza, upgrade, formatação, troca de peças e otimização de desempenho para manter seus equipamentos confiáveis no dia a dia.'
        },
        videogame: {
            titulo: 'Assistência técnica para videogames',
            texto: 'Avaliação, manutenção e correção de falhas em videogames para ajudar o cliente a recuperar desempenho, imagem, conectividade e estabilidade de uso.'
        },
        cftv: {
            titulo: 'Instalação e manutenção de câmeras CFTV',
            texto: 'Implantação, organização e manutenção de sistemas de monitoramento para residências, comércios e empresas.'
        },
        redes: {
            titulo: 'Infraestrutura de redes e cabeamento',
            texto: 'Montagem, organização e manutenção de redes cabeadas e Wi-Fi, incluindo cabeamento estruturado, racks e pontos de rede.'
        },
        suporte: {
            titulo: 'Suporte técnico para empresas',
            texto: 'Atendimento remoto e presencial para rotina operacional, correção de falhas, orientação técnica e acompanhamento recorrente.'
        },
        acesso: {
            titulo: 'Controle de acesso',
            texto: 'Soluções para entrada e saída de pessoas, com instalação e configuração de fechaduras, biometria, cartões e dispositivos relacionados.'
        },
        impressora: {
            titulo: 'Manutenção de impressoras',
            texto: 'Conserto, limpeza, configuração e substituição de componentes para reduzir falhas e interrupções na rotina.'
        },
        aluguel: {
            titulo: 'Aluguel de celulares e computadores',
            texto: 'Locação de celulares e computadores para demandas temporárias, operação de equipes, contingência e apoio a rotinas empresariais.'
        },
        servidor: {
            titulo: 'Backup e configuração de servidores',
            texto: 'Estruturação de rotinas de backup, configuração de servidores e organização do ambiente para mais continuidade e segurança.'
        },
        consultoria: {
            titulo: 'Consultoria em TI',
            texto: 'Avaliação do cenário atual, priorização de melhorias e indicação de soluções adequadas à estrutura e ao momento do cliente.'
        },
        intranet: {
            titulo: 'Criação de intranet corporativa',
            texto: 'Desenvolvimento de ambientes internos para comunicação, organização de informações, processos e acesso de equipes dentro da empresa.'
        },
        sites: {
            titulo: 'Criação de sites personalizados',
            texto: 'Desenvolvimento de páginas institucionais e landing pages para apresentar sua empresa com mais clareza, credibilidade e presença digital.'
        },
        sistemas: {
            titulo: 'Sites e sistemas comerciais',
            texto: 'Estruturação de soluções digitais para apresentação comercial, operação e vendas, incluindo sites e sistemas voltados ao contexto do negócio.'
        }
    };

    function openModal(modal) {
        if (!modal) {
            return;
        }

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) {
            return;
        }

        modal.style.display = 'none';

        if (
            (!formModal || formModal.style.display !== 'flex') &&
            (!serviceModal || serviceModal.style.display !== 'flex')
        ) {
            document.body.style.overflow = '';
        }
    }

    function setCurrentYear() {
        var year = new Date().getFullYear();

        yearElements.forEach(function (element) {
            element.textContent = String(year);
        });
    }

    function setActiveMenu() {
        var currentPath = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    function closeMobileMenu() {
        if (!menuCentral || !menuToggle) {
            return;
        }

        menuCentral.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    setCurrentYear();
    setActiveMenu();

    budgetButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            if (formModal) {
                event.preventDefault();
                openModal(formModal);
            } else {
                window.open('https://wa.me/' + whatsappPhone + '?text=' + encodeURIComponent(defaultMessage), '_blank');
            }
        });
    });

    if (budgetClose) {
        budgetClose.addEventListener('click', function () {
            closeModal(formModal);
        });
    }

    if (serviceClose) {
        serviceClose.addEventListener('click', function () {
            closeModal(serviceModal);
        });
    }

    if (budgetForm) {
        budgetForm.addEventListener('submit', function (event) {
            var nome = document.getElementById('nome').value.trim();
            var contato = document.getElementById('contato').value.trim();
            var servico = document.getElementById('servico').value.trim();
            var detalhes = document.getElementById('detalhes').value.trim();

            event.preventDefault();

            if (!nome || !contato || !servico || !detalhes) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            var mensagem =
                'Olá, meu nome é ' + nome + '.\n' +
                'Quero solicitar orçamento para: ' + servico + '.\n' +
                'Contato: ' + contato + '\n' +
                'Detalhes: ' + detalhes;

            window.open('https://wa.me/' + whatsappPhone + '?text=' + encodeURIComponent(mensagem), '_blank');
            closeModal(formModal);
            budgetForm.reset();
        });
    }

    if (menuToggle && menuCentral) {
        menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', function () {
            var isOpen = menuCentral.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    serviceCards.forEach(function (card) {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.innerText.trim());

        function handleOpen() {
            var tipo = card.getAttribute('data-servico');
            var explicacao = servicoExplicacoes[tipo];
            var nomeServico = card.querySelector('.servico-nome')
                ? card.querySelector('.servico-nome').textContent.trim()
                : '';

            if (serviceSelect && nomeServico) {
                Array.prototype.forEach.call(serviceSelect.options, function (option, index) {
                    if (option.text.trim() === nomeServico) {
                        serviceSelect.selectedIndex = index;
                    }
                });
            }

            if (!explicacao || !serviceModal || !modalServicoTitle || !modalServicoTexto || !btnServicoWhats) {
                return;
            }

            modalServicoTitle.textContent = explicacao.titulo;
            modalServicoTexto.textContent = explicacao.texto;
            btnServicoWhats.href = 'https://wa.me/' + whatsappPhone + '?text=' + encodeURIComponent('Olá! Gostaria de solicitar orçamento para ' + explicacao.titulo + '.');
            openModal(serviceModal);
        }

        card.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                return;
            }

            handleOpen();
        });

        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleOpen();
            }
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === formModal) {
            closeModal(formModal);
        }

        if (event.target === serviceModal) {
            closeModal(serviceModal);
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal(formModal);
            closeModal(serviceModal);
            closeMobileMenu();
        }
    });
});
