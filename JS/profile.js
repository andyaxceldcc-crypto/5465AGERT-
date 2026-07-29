// ===== PERFIL =====
let profile = getData('profile', {
    name: 'Andy Axel',
    username: '@andyaxel',
    bio: 'Creador | Música | Enlaces',
    avatar: 'assets/images/avatar-default.png',
    cover: 'linear-gradient(135deg, #6a11cb, #2575fc)'
});

function renderProfile() {
    document.querySelectorAll('#displayName, #fullName').forEach(el => el.textContent = profile.name);
    document.querySelectorAll('#displayUsername, #fullUsername').forEach(el => el.textContent = profile.username);
    document.querySelectorAll('#displayBio, #fullBio').forEach(el => el.textContent = profile.bio);
    document.querySelectorAll('#avatarImg, #avatarFull').forEach(el => el.src = profile.avatar);
    const cover = document.getElementById('coverPreview');
    if (cover) cover.style.background = profile.cover;
}
// Editar en editar.html
