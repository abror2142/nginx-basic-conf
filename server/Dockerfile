FROM node

WORKDIR /home/app/backend

COPY package*.json .

RUN npm install 

COPY . .

EXPOSE 7777

CMD [ "npm", "run", "start" ]