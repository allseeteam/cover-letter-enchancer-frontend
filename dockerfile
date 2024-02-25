FROM node:21-alpine as build-stage

WORKDIR /app

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM httpd:alpine as production-stage

COPY --from=build-stage /app/build /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]
