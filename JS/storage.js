// ===== STORAGE UTILITIES =====
function saveData(key, data) {
    localStorage.setItem('andyaxel_' + key, JSON.stringify(data));
}
function getData(key, defaultVal = null) {
    const raw = localStorage.getItem('andyaxel_' + key);
    return raw ? JSON.parse(raw) : defaultVal;
}
