import { categoriesByProfile } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const acessoViaSelecaoPerfil = params.get('perfil') === '1';

    if (!acessoViaSelecaoPerfil) {
        window.location.href = '../index.html';
        return;
    }

    const aliasesPerfil = {
        Uander: 'Miguel',
        Gilvaneide: 'Jane'
    };
    const nomePerfilSalvo = localStorage.getItem('perfilAtivoNome') || 'Miguel';
    const nomePerfil = aliasesPerfil[nomePerfilSalvo] || nomePerfilSalvo;
    const nomePerfilNormalizado = nomePerfil.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');
    const themeSelect = document.getElementById('catalog-theme-select');
    const themeLabel = document.getElementById('catalog-theme-label');
    const themeStorageKey = `catalogThemePreference:${nomePerfilNormalizado}`;

    const applyTheme = (themePreference) => {
        document.body.setAttribute('data-theme', themePreference);
    };

    let savedThemePreference = localStorage.getItem(themeStorageKey);
    if (savedThemePreference === 'dark') {
        savedThemePreference = 'black';
    }

    if (savedThemePreference !== 'black' && savedThemePreference !== 'light') {
        savedThemePreference = 'black';
    }

    if (themeSelect) {
        themeSelect.value = savedThemePreference;
        themeSelect.setAttribute('aria-label', `Selecionar tema do catálogo do perfil ${nomePerfil}`);
        themeSelect.addEventListener('change', (event) => {
            const selectedTheme = event.target.value;
            localStorage.setItem(themeStorageKey, selectedTheme);
            applyTheme(selectedTheme);
        });
    }

    if (themeLabel) {
        themeLabel.textContent = `Tema de ${nomePerfil}`;
    }

    applyTheme(savedThemePreference);

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    if (nomePerfil) {
        const kidsLink = document.querySelector('.kids-link');
        if (kidsLink) kidsLink.textContent = nomePerfil;
    }

    const container = document.getElementById('main-content');
    const categories = categoriesByProfile[nomePerfil] || categoriesByProfile.Miguel;
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
