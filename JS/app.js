// ===== APP (inicialización global) =====
console.log('🚀 ANDYAXCEL LINK cargado correctamente.');
// Registrar Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('✅ Service Worker registrado.');
    });
}
