FROM node:12

LABEL Maintainer="Emmanuel Adebayo <emmanueltolu.adebayo@gmail.com>"
LABEL For="Metacare"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000


RUN chmod +x ./start.sh

RUN npm run build

CMD ./start.sh