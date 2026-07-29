// ===== MÚSICA =====
const MUSIC_PLATFORMS = [
    { name: 'Spotify', icon: '🎵' },
    { name: 'Apple Music', icon: '🎧' },
    { name: 'YouTube Music', icon: '▶️' },
    { name: 'SoundCloud', icon: '☁️' },
    { name: 'Deezer', icon: '🎶' },
    { name: 'Tidal', icon: '🌊' }
];
function renderMusic(containerId = 'musicPlatforms') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = MUSIC_PLATFORMS.map(p => 
        `<button class="music-btn" data-platform="${p.name}">${p.icon} ${p.name}</button>`
    ).join('');
}
