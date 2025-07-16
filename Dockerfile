FROM node:20.19.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/aftas-angular /usr/share/nginx/html

EXPOSE 80
