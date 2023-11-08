FROM node:16-alpine

ENV PORT=8081

WORKDIR /home/node/app

ENV PATH /home/node/app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm config set cache /tmp --global

RUN npm install 

COPY . .

CMD [ "npm", "start"]

EXPOSE 8081
