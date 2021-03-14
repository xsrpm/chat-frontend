# ¿Para que es este repositorio?

Frontend para chat

# Características
- Soporta n usuarios conectados.
- Ingreso al chat
- Cerrar sesión
- Usuarios conectados
- Visualización en el titulo de la web el nick actualmente en uso
- No almacena los chats en sesión

# Dependencias de Desarrollo

* IDE: Visual Studio Code
* Nodejs 10 o mayor

# Dependencias de Ejecución

* Browser: Firefox/Chrome/Edge
* Backend de chat: https://github.com/xsrpm/chat-backend

# Fuente
https://javascript.info/websocket

# Anexo

## Referencia para estructura de proyecto y automatización de workflow con nodejs y parcel
https://www.youtube.com/watch?v=8rD9amRSOQY

## Variables de entorno en nodejs

### Forma de setear variables de entorno para la terminal en ejecución y luego otros
https://www.youtube.com/watch?v=U6st9-lNUyY

    export PORT=4000 (en linux)
    set PORT=4000 (en windows)

### Usando dotenv y otros para gestionarlo dentro de nodejs
https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html
https://robertcooper.me/post/front-end-javascript-environment-variables
https://parceljs.org/env.html



## Contenerizando aplicacion con Docker

### Creación de imagen y contenedor docker para nginx (servidor http)
https://soka.gitlab.io/blog/post/2019-07-08-docker-imagenes-y-contenedores/

### Creando imagen docker a partir de archivo Dockerfile

    docker build -t cemp2703/chat-frontend:1.0.0 .

### Creando contenedor a partir del docker-compose.yml

    docker-compose up -d

Los valores para las variables de entorno se pueden setear creando una variable de entorno en el s.o., en la consola donde se ejecuta este comando o creando un archivo .env con el valor para la variable de entorno.
docker-compose.yml describe que variable de entorno espera la aplicación.
El archivo .env.example es un plantilla de referencia para la creación de un archivo .env