# Laboratorio de CI/CD con Sitio Web de Gatos

Este proyecto es un ejemplo de sitio web estático. El sitio muestra diferentes estilos y contenido según el ambiente de despliegue (desarrollo, staging, producción).

## Características

- Detección automática del ambiente de despliegue
- Diferentes estilos visuales según el ambiente
- Galería de gifs de gatos usando la API pública de CATAAS

## Configuración inicial

1. Clona este repositorio
2. Instala las dependencias:
   ```
   npm install
   ```

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo local
- `npm run build:static` - Construye el sitio para producción
- `npm run build:dev` - Construye el sitio para el ambiente de desarrollo
- `npm run build:staging` - Construye el sitio para el ambiente de staging
- `npm run build:prod` - Construye el sitio para el ambiente de producción
- `npm run preview` - Previsualiza la versión construida localmente

## Implementación en un pipeline CI/CD

Este proyecto está diseñado para ser fácilmente integrado en pipelines CI/CD:

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Construye el sitio para el ambiente específico:
   - Desarrollo: `npm run build:dev`
   - Staging: `npm run build:staging`
   - Producción: `npm run build:prod`
4. Despliega el contenido de la carpeta `dist` en tu servidor web


## Estructura del proyecto

- `src/index.html` - Estructura HTML del sitio
- `src/css/styles.css` - Estilos del sitio
- `src/js/main.js` - Lógica del sitio y detección de ambiente
- `src/js/environment.js` - Configuración de ambiente