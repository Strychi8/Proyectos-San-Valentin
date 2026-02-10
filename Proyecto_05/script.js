 const romanticPhrases = [
    "Eres el sueño que no quiero dejar de soñar",
    "Mi corazón late al ritmo de tu nombre",
    "En un mar de gente, mi mirada te busca siempre",
    "Eres la razón por la que creo en el amor",
    "Contigo hasta el infinito y más allá",
    "Tu sonrisa es mi lugar favorito",
    "Eres mi hoy y todos mis mañanas",
    "El amor más bonito es el que construimos día a día",
    "Eres mi persona favorita en todo el mundo",
    "No hay distancia que apague lo que siento por ti",
    "Cada día a tu lado es un regalo del universo",
    "Tu amor es la melodía que alegra mi corazón",
    "Eres mi luz en los días oscuros",
    "Amarse es mirar en la misma dirección",
    "El verdadero amor nunca se acaba",
    "Eres la respuesta a todas mis preguntas",
    "Juntos escribimos la más bella historia",
    "Tu amor es mi mayor tesoro",
    "Eres mi complemento perfecto",
    "El amor no tiene edad, siempre está naciendo"
];
        
const ghostColors = ["rgba(255, 235, 240, 0.9)", "rgba(255, 240, 245, 0.9)", "rgba(255, 245, 250, 0.9)"];
        
function createGhost() {
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
            
    // Posición aleatoria
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 120);
            
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
            
    // Color aleatorio
    const color = ghostColors[Math.floor(Math.random() * ghostColors.length)];
    ghost.style.backgroundColor = color;
            
    // Tiempo de animación aleatorio
    const duration = 2 + Math.random() * 3;
    ghost.style.animationDuration = `${duration}s`;
            
    // Crear cara
    const face = document.createElement('div');
    face.className = 'face';
            
    const eyes = document.createElement('div');
    eyes.className = 'eyes';
            
    const leftEye = document.createElement('div');
    leftEye.className = 'eye';
            
    const rightEye = document.createElement('div');
    rightEye.className = 'eye';
            
    const mouth = document.createElement('div');
    mouth.className = 'mouth';
            
    eyes.appendChild(leftEye);
    eyes.appendChild(rightEye);
    face.appendChild(eyes);
    face.appendChild(mouth);
    ghost.appendChild(face);
            
    // Crear mensaje
    const message = document.createElement('div');
    message.className = 'message';
    const phrase = romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];
    message.textContent = phrase;
            
    ghost.appendChild(message);
            
    ghost.addEventListener('click', function(e) {
    e.stopPropagation();
                
    // Animación de boca al besar
    mouth.style.height = "10px";
    mouth.style.borderRadius = "50%";
    setTimeout(() => {
        mouth.style.height = "15px";
        mouth.style.borderRadius = "0 0 30px 30px";
    }, 300);
                
    // Mostrar mensaje
    message.style.display = 'block';
                
    // Crear beso
    createKiss(e.clientX, e.clientY);
                
    // Mover fantasma a nueva posición después de un tiempo
    setTimeout(() => {
        message.style.display = 'none';
        moveGhost(ghost);
    }, 3000);
});
            
document.getElementById('gameArea').appendChild(ghost);
            
// Mover fantasma periódicamente
const moveInterval = setInterval(() => moveGhost(ghost), 8000);
            
// Guardar intervalo para limpieza
    ghost.dataset.interval = moveInterval;
}
        
function moveGhost(ghost) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 120);
        
    ghost.style.transition = 'all 3s ease-in-out';
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
            
    setTimeout(() => {
        ghost.style.transition = 'none';
    }, 3000);
}
        
function createKiss(x, y) {
    const kiss = document.createElement('div');
    kiss.className = 'kiss';
    kiss.textContent = '💋';
    kiss.style.left = `${x}px`;
    kiss.style.top = `${y}px`;
            
    // Dirección aleatoria para el beso
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 150;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
            
    kiss.style.setProperty('--tx', `${tx}px`);
    kiss.style.setProperty('--ty', `${ty}px`);
            
    document.getElementById('gameArea').appendChild(kiss);
            
    // Eliminar beso después de la animación
    setTimeout(() => {
        kiss.remove();
    }, 1500);
}
        
// Ajustar tamaño al cambiar ventana
window.addEventListener('resize', function() {
    const ghosts = document.querySelectorAll('.ghost');
    ghosts.forEach(ghost => {
        const currentX = parseFloat(ghost.style.left);
        const currentY = parseFloat(ghost.style.top);
                
        // Asegurar que no queden fuera de la pantalla
        ghost.style.left = `${Math.min(currentX, window.innerWidth - 100)}px`;
        ghost.style.top = `${Math.min(currentY, window.innerHeight - 120)}px`;
    });
});
        
// Crear fantasmas iniciales
function initGame() {
    const ghostCount = Math.min(8, Math.floor(window.innerWidth / 120));
    for (let i = 0; i < ghostCount; i++) {
        setTimeout(() => createGhost(), i * 800);
    }
}
        
// Crear nuevo fantasma al hacer clic en pantalla
document.addEventListener('click', function(e) {
    if (e.target === document.body || e.target.id === 'gameArea') {
        if (Math.random() > 0.5) { // 50% de probabilidad de crear nuevo fantasma
            createGhost();
        }
    }
});
        
// Iniciar juego cuando se carga la página
 window.addEventListener('load', initGame);