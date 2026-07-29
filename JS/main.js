// ===== MAIN =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProfile();
    renderMusic('musicPlatforms');
    renderMusic('musicPlatformsFull');
    renderSocialIcons();
    if (document.getElementById('linksContainer')) renderLinks();
    if (document.getElementById('qrCanvas')) generateQR(window.location.href);
    initDrag('linksContainer');
    initAnimations();
    // Compartir
    document.getElementById('shareProfileBtn')?.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({ title: 'ANDYAXCEL LINK', url: window.location.href });
        } else {
            copyToClipboard(window.location.href);
        }
    });
});

function renderLinks() {
    const container = document.getElementById('linksContainer');
    if (!container) return;
    let links = getData('links', [
        { id: '1', title: 'Mi Portafolio', url: 'https://portfolio.example.com', icon: '💼' },
        { id: '2', title: 'Proyectos', url: 'https://github.com', icon: '📁' }
    ]);
    container.innerHTML = links.map(link => `
        <div class="link-card" draggable="true" data-id="${link.id}">
            <span class="icon">${link.icon || '🔗'}</span>
            <div class="link-info">
                <div class="link-title">${link.title}</div>
                <div class="link-url">${link.url}</div>
            </div>
            <button class="btn-icon copy-link" data-url="${link.url}" title="Copiar">📋</button>
        </div>
    `).join('');
    // Copiar enlaces
    document.querySelectorAll('.copy-link').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            copyToClipboard(btn.dataset.url);
        });
    });
}

function renderSocialIcons() {
    const container = document.getElementById('socialIcons');
    if (!container) return;
    const socials = [
        { name: 'Facebook', icon: SOCIAL_ICONS.facebook },
        { name: 'Instagram', icon: SOCIAL_ICONS.instagram },
        { name: 'TikTok', icon: SOCIAL_ICONS.tiktok },
        { name: 'YouTube', icon: SOCIAL_ICONS.youtube },
        { name: 'WhatsApp', icon: SOCIAL_ICONS.whatsapp }
    ];
    container.innerHTML = socials.map(s => `
        <button class="social-btn" title="${s.name}">${s.icon} ${s.name}</button>
    `).join('');
}
