// ===== COPIAR =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Enlace copiado!');
    }).catch(() => {
        // Fallback
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('¡Enlace copiado!');
    });
}
