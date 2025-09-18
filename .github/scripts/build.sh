#!/bin/bash
set -e

# Imprimo todas las variables de entorno #
#printenv

# Limpio builds anteriores
rm -rf ./dist

# Imprimo en que ambiente estoy ejecutando
echo "El ambiente es:" $CI_ENV

# Inicia el proceso de build
npm run build:$CI_ENV
