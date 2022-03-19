FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=8081

EXPOSE 8081

CMD [ "npm", "run", "start" ]
