FROM node:14.20-alpine

WORKDIR ./src/App

COPY package.json ./
COPY package-lock.json ./

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake
    
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

EXPOSE 80

CMD npm start

