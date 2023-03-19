# This is not a working file there is some bug to fixed
FROM node:lts-alpine
ENV MONGO_URI =
ENV PORT = 5000
ENV ALLOWED_ORIGINS = 'http://localhost:4000'
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 5000
CMD npm start