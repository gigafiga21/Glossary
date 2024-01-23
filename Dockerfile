FROM node:14.18.2-alpine as build
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run data
RUN npm run build

FROM nginx:stable-alpine3.17 as production
COPY --from=build /app/build /usr/share/nginx/html
