# build environment
FROM node:16.14.0-alpine as build
WORKDIR /display-image
ENV PATH /display-image/node_modules/.bin:$PATH
COPY package.json /display-image/package.json
RUN npm install --silent
COPY . /display-image
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /display-image/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
