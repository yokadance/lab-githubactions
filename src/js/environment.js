// Configuración de ambientes
const ENV_CONFIG = {
    development: {
      name: 'DESARROLLO',
      badgeText: 'Ambiente: DESARROLLO',
      cssClass: 'dev-env'
    },
    staging: {
      name: 'STAGING',
      badgeText: 'Ambiente: STAGING',
      cssClass: 'staging-env'
    },
    production: {
      name: 'PRODUCCIÓN',
      badgeText: 'Ambiente: PRODUCCIÓN',
      cssClass: 'prod-env'
    }
  };
  
  // Detectar el ambiente desde una variable o URL
  export function detectEnvironment() {
    // Primero verificamos si hay una variable de entorno NODE_ENV definida
    // Esto será útil durante el proceso de construcción
    const nodeEnv = process.env.NODE_ENV;
    
    if (nodeEnv && ['development', 'staging', 'production'].includes(nodeEnv)) {
      return nodeEnv;
    }
    
    // Si no hay variable de entorno, verificamos la URL
    const url = window.location.href.toLowerCase();
    
    let environment = "development"; // Valor por defecto
    
    if (url.includes('prod') || url.includes('production')) {
      environment = "production";
    } else if (url.includes('stag') || url.includes('staging')) {
      environment = "staging";
    }
    
    return environment;
  }
  
  // Obtener la configuración del ambiente
  export function getEnvironmentConfig(env) {
    return ENV_CONFIG[env] || ENV_CONFIG.development;
  }
  
  // Método para registrar la información de construcción
  export function logBuildInfo() {
    const buildInfo = document.getElementById('build-info');
    const env = detectEnvironment();
    const config = getEnvironmentConfig(env);
    
    buildInfo.textContent = `Construcción para ${config.env} (${new Date().toISOString()})`;
  }