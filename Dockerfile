# Imagen base oficial de Node
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos de la app
COPY app/package*.json ./
RUN npm install

COPY app .

# Exponer el puerto que usa React
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
