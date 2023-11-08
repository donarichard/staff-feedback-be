FROM node:16-alpine

ENV PORT=8080

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

CMD [ "npm", "run", "start" ]

EXPOSE 8080
