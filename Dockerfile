FROM node:12-alpine

WORKDIR /src
COPY package.json /src/
RUN npm install
# RUN npm i nodemon -g

COPY . /src

EXPOSE 8080
# run in production environment
# CMD ["node", "index.js"]

# run in dev environment
CMD ["npm" ,"run", "dev"]