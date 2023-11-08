FROM node:16-alpine

ENV PORT=8080

WORKDIR /home/node/app

COPY package*.json .

RUN npm config set cache /tmp --global

RUN npm install --include=dev

RUN npm install -g @babel/core @babel/cli @babel/preset-env

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 8080
