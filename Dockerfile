FROM node:18.20.0

WORKDIR /app

COPY . /app

RUN npm i

EXPOSE 4000

CMD ["npm", "run", "start"]