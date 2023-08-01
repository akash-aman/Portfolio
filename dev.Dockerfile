FROM node:18-alpine

WORKDIR /app

# Copy lock files if file exists
COPY package.json yarn.lock* package-lock.json* ./

RUN yarn install

VOLUME [ "./app" ]

COPY next.config.js .

CMD yarn run build && yarn run start
