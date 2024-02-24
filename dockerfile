FROM node:21-alpine as build-stage

WORKDIR /app

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
