FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY src /app

EXPOSE 3005

RUN ls -al

CMD ["node", "--max-old-space-size=4096", "server.js"]