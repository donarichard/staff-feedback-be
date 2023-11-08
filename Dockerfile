FROM node:16-alpine

ENV PORT=8081

WORKDIR /home/node/app

COPY package*.json .

RUN npm config set cache /tmp --global

RUN npm install 

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 8081
