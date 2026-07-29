// ===== DRAG & DROP =====
function initDrag(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let dragItem = null;
    container.addEventListener('dragstart', e => {
        dragItem = e.target.closest('.link-card');
        if (dragItem) dragItem.classList.add('dragging');
    });
    container.addEventListener('dragend', e => {
        document.querySelectorAll('.link-card').forEach(c => c.classList.remove('dragging'));
    });
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement) container.insertBefore(dragItem, afterElement);
        else container.appendChild(dragItem);
    });
}
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.link-card:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset, element: child };
        else return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
