FROM node:16-alpine

ENV PORT=8080

WORKDIR /home/node/app

COPY package*.json .

RUN npm config set cache /tmp --global

RUN npm config set -g production false

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

CMD [ "npm", "run", "start" ]

EXPOSE 8080
