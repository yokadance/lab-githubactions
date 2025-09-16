import { detectEnvironment, getEnvironmentConfig, logBuildInfo } from './environment.js';

// Configurar la página según el ambiente
function setupEnvironment(env) {
    const config = getEnvironmentConfig(env);
    const envName = document.getElementById('env-name');
    const envBadge = document.getElementById('env-badge');
    const body = document.body;
    
    // Eliminar todas las clases de ambiente existentes
    body.classList.remove('dev-env', 'staging-env', 'prod-env');
    
    // Aplicar la configuración del ambiente
    envName.textContent = config.name;
    envBadge.textContent = config.badgeText;
    body.classList.add(config.cssClass);
    
    // Actualizar la hora de despliegue
    document.getElementById('deploy-time').textContent = new Date().toLocaleString();
}

// Cargar gifs de gatos
function loadCatGifs() {
    const catGallery = document.getElementById('cat-gallery');
    const catGifs = [
        {
            url: "https://cataas.com/cat/gif",
            title: "Gif de Gato random"
        },
        {
            url: "https://cataas.com/cat/gif?filter=mono",
            title: "Gif de Gato Monocromático"
        },
        {
            url: "https://cataas.com/cat/gif?filter=custom",
            title: "Gif de Gato filtro custom"
        }
    ];
    
    // Por cada gif de gato, crear una tarjeta
    catGifs.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        
        catCard.innerHTML = `
            <img src="${cat.url}" alt="${cat.title}" class="cat-image">
            <div class="cat-info">
                <h4>${cat.title}</h4>
            </div>
        `;
        
        catGallery.appendChild(catCard);
    });
}

// Inicializar la página
window.addEventListener('DOMContentLoaded', function() {
    const environment = detectEnvironment();
    setupEnvironment(environment);
    loadCatGifs();
    
    // Agregar indicación de qué cambiar para cada ambiente
    console.log(`Sitio ejecutándose en ambiente: ${environment}`);
});