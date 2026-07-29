// ===== MODAL SIMPLE =====
function showModal(title, content) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9999;';
    const modal = document.createElement('div');
    modal.style.cssText = 'background:rgba(255,255,255,0.9);padding:2rem;border-radius:24px;max-width:400px;width:90%;';
    modal.innerHTML = `<h3>${title}</h3><p>${content}</p><button class="btn-primary" onclick="this.closest('div[style]').remove()">Cerrar</button>`;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
