FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "start" ]
