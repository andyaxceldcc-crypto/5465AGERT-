// ===== ANIMACIONES =====
function initAnimations() {
    document.querySelectorAll('.glass-card').forEach((el, i) => {
        el.style.animationDelay = (i * 0.08) + 's';
    });
}
