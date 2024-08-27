FROM node:21.7.1-alpine3.19

# Crear directorio de Trabajo
WORKDIR /usr/src/app


# Copiar archivos de package.json y yarn.lock
COPY 02-car-dealership/package.json ./
COPY 02-car-dealership/yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar codigo fuente
COPY 02-car-dealership .

EXPOSE ${PORT}

CMD [ "yarn", "start:dev"]
