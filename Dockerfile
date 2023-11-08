FROM node:16-alpine

ENV PORT=8081

WORKDIR /home/node/app

COPY package*.json .

RUN npm install --quiet

RUN npm install 

COPY . .

EXPOSE 8081
