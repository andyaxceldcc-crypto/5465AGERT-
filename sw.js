self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('andyaxel-cache').then(cache => {
            return cache.addAll([
                'index.html',
                'perfil.html',
                'editar.html',
                'configuracion.html',
                'musica.html',
                'redes.html',
                'contacto.html',
                'ayuda.html',
                'css/style.css',
                'css/responsive.css',
                'css/dark.css',
                'css/buttons.css',
                'css/cards.css',
                'css/forms.css',
                'css/header.css',
                'css/footer.css',
                'css/profile.css',
                'css/music.css',
                'css/animations.css',
                'js/app.js',
                'js/main.js',
                'js/profile.js',
                'js/music.js',
                'js/drag.js',
                'js/theme.js',
                'js/search.js',
                'js/copy.js',
                'js/qr.js',
                'js/icons.js',
                'js/animation.js',
                'js/modal.js',
                'js/storage.js',
                'js/utils.js',
                'assets/images/avatar-default.png'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
