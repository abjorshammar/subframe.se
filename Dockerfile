FROM node:6

ADD . /app
workdir /app
RUN npm install

VOLUME /app
VOLUME /app/node_modules

EXPOSE 3000

CMD npm start
