FROM node:alpine

RUN mkdir -p /app && mkdir -p /app/public

ADD package.json /app/package.json
ADD server.js /app/server.js

RUN cd /app && npm install

VOLUME ["/app/public"]

EXPOSE 3000

CMD ["node", "/app/server.js"]
