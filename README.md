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

## Contenerizando aplicacion con Docker

### Creación de imagen y contenedor docker para nginx (servidor http)
https://soka.gitlab.io/blog/post/2019-07-08-docker-imagenes-y-contenedores/

### Creando imagen docker (a partir de archivo Dockerfile)

    docker build -t cemp2703/chat-frontend:1.0.0 .

### Creando y levantando contenedor (a partir de la imagen creada)

    docker run -it -p 8081:80 --rm chat-frontend:1.0.0