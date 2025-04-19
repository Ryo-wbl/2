// Menu móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

// Evento para el botón del menú móvil
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // Activa/desactiva el menú
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace

        // Desplazamiento suave hacia la sección correspondiente
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cerrar el menú móvil si está abierto
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});

// Animación de aparición en scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';  // Mostrar la sección cuando aparece en la vista
        }
    });
});

// Inicializar estado de secciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';  // Ocultar las secciones inicialmente
        section.style.transition = 'opacity 1s ease-in-out';  // Animación de aparición
    });

    // Trigger para la primera vista
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll')); // Activa la animación al cargar
    }, 200);
});