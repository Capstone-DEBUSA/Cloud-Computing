FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

ENV MODEL_URL=https://storage.googleapis.com/saved-model-900/model-debusa-tfjs/model.json
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]