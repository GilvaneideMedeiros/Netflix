window.addEventListener('DOMContentLoaded', function() {
    var themeSelect = document.getElementById('theme-select');
    var profileLinks = document.querySelectorAll('.profile-link');

    function applyTheme(themePreference) {
        document.body.setAttribute('data-theme', themePreference);
    }

    // Migra preferência antiga "dark" para "black" e mantém "light".
    var savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference === 'dark') {
        savedThemePreference = 'black';
    }

    if (savedThemePreference !== 'black' && savedThemePreference !== 'light') {
        savedThemePreference = 'light';
    }

    themeSelect.value = savedThemePreference;
    applyTheme(savedThemePreference);

    themeSelect.addEventListener('change', function(event) {
        var selectedTheme = event.target.value;
        localStorage.setItem('themePreference', selectedTheme);
        applyTheme(selectedTheme);
    });

    profileLinks.forEach(function(profileLink) {
        profileLink.addEventListener('click', function(event) {
            event.preventDefault();

            var profileImage = profileLink.querySelector('img');
            var profileName = profileLink.querySelector('figcaption');

            if (profileName) {
                localStorage.setItem('perfilAtivoNome', profileName.textContent.trim());
            }

            if (profileImage) {
                localStorage.setItem('perfilAtivoImagem', profileImage.src);
            }

            window.location.href = 'catalogo/catalogo.html?perfil=1';
        });
    });

    setTimeout(function() {
        document.getElementById('splash').classList.add('hide');
    }, 2200); // 2,2 segundos
});
