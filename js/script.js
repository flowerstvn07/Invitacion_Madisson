// Navegación entre pantallas
function nextScreen(screenNumber) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });

    // Mostrar la pantalla seleccionada
    const targetScreen = document.getElementById('screen' + screenNumber);
    targetScreen.classList.remove('hidden');
    setTimeout(() => {
        targetScreen.classList.add('active');
    }, 50);

    // Agregar confeti en la última pantalla
    if (screenNumber === 3) {
        createConfetti();
    }
}

// Crear confeti para la última pantalla
function createConfetti() {
    const container = document.querySelector('.phone-container');
    // Limpiar confeti anterior si existe
    document.querySelectorAll('.confetti').forEach(confetti => {
        confetti.remove();
    });
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = getRandomColor();
        container.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc', '#ffeb3b', '#e91e63'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Transición automática después de la carga
window.onload = function() {
    setTimeout(() => {
        nextScreen(2);
    }, 3500); // 3.5 segundos para la animación de carga
};

// Función para mostrar el modal de información
function showInfo() {
    // Crear el modal si no existe
    if (!document.getElementById('infoModal')) {
        const modal = document.createElement('div');
        modal.id = 'infoModal';
        modal.className = 'info-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal" onclick="closeInfo()">×</button>
                <div class="modal-text">
                    ¡Tendremos piscinas para los niños! No olvides traer tu ropa para bañarte. Y si te gusta el pinta caritas, llega tempranito para no quedarte sin el tuyo.
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Mostrar el modal
    document.getElementById('infoModal').classList.add('active');
}

// Función para cerrar el modal de información
function closeInfo() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Función para abrir la ubicación en Google Maps
function openLocation() {
    window.open('https://maps.app.goo.gl/H3tLu1oiA6zS6ycMA?g_st=iw', '_blank');
}

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (modal && modal.classList.contains('active') && event.target === modal) {
        closeInfo();
    }
});