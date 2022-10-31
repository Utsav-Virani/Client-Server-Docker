FROM node:latest

WORKDIR /usr/src/todo

COPY package.json yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]