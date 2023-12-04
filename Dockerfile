FROM node:16-alpine as build

WORKDIR /app

ADD package.json /app/package.json

RUN npm install --legacy-peer-deps

ADD . /app
RUN npm run build 

# prepare nginx
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build app/build /usr/share/nginx/html 


# start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]