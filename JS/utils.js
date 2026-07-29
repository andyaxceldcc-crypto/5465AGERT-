// ===== UTILS =====
function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); }
function debounce(fn, ms = 300) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); }; }
