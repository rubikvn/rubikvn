FROM node:8

WORKDIR /code

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 80 443 8080

CMD ["npm", "start"]
