// ===== QR SIMPLE (canvas) =====
function generateQR(text, canvasId = 'qrCanvas') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 150;
    canvas.width = size; canvas.height = size;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    // Simulación de QR (para demo)
    ctx.fillStyle = '#000';
    const cells = 10;
    const cellSize = size / cells;
    for (let i = 0; i < cells; i++) {
        for (let j = 0; j < cells; j++) {
            if ((i + j) % 2 === 0 || (i * j) % 3 === 0) {
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }
}
