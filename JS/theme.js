// ===== TEMA OSCURO/CLARO =====
function initTheme() {
    const theme = getData('theme', 'light');
    if (theme === 'dark') document.body.classList.add('dark');
    document.getElementById('themeToggle')?.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        saveData('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}
