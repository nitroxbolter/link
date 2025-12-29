// Navegação entre páginas
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Função para mostrar página
    function showPage(pageId) {
        // Esconde todas as páginas
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Remove classe active de todos os itens do menu
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Mostra a página selecionada
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Adiciona classe active ao item do menu correspondente
        const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Atualiza a URL sem recarregar a página
        window.history.pushState({ page: pageId }, '', `#${pageId}`);
    }

    // Adiciona event listeners aos itens do menu
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Verifica hash na URL ao carregar a página
    function checkHash() {
        const hash = window.location.hash.substring(1);
        if (hash && ['home', 'bases', 'sprites', 'github', 'tools', 'comandos'].includes(hash)) {
            showPage(hash);
        } else {
            showPage('home');
        }
    }

    // Verifica hash inicial
    checkHash();

    // Listener para mudanças no hash
    window.addEventListener('hashchange', checkHash);
});

