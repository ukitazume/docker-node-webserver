FROM node:alpine

RUN mkdir -p /app && mkdir -p /app/public

COPY *.js* /app/

RUN cd /app && npm ci

EXPOSE 3000

CMD ["node", "/app/server.js"]
