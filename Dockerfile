FROM node:18-alpine

WORKDIR /frontend

COPY --chown=node:node package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "start"]

USER node
