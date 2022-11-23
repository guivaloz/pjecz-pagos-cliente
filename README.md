# pjecz-pagos-cliente

Front-end del Portal de Pagos del PJECZ

## Configuracion para desarrollo

Crear un archivo `.env` con las variables de entorno

    REACT_APP_API_URL_BASE=http://127.0.0.1:8005

Para hacer la instalacion a partir de `package.json`

    npm install

Arrancar con

    npm run dev

## Pasos que se realizaron para crearlo

Se usa [Vite](https://vitejs.dev/)

    npm create vite@latest pjecz-pagos-cliente

Primer arranque

    cd pjecz-pagos-cliente
    npm install
    npm run dev

Instalar [MUI](https://mui.com/)

    npm install @mui/material @emotion/react @emotion/styled

Instalar react-router-dom

    npm install react-router-dom

## Pasos para subir a produccion

Debe tener un archivo `app.yaml` listo

1. Ejecute `npm run build`
1. Suba a Google Cloud con `gcloud app deploy`
