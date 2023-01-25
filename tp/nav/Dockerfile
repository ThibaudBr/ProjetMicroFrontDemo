# build environment
FROM node:12.2.0-alpine as build
WORKDIR /nav
ENV PATH /nav/node_modules/.bin:$PATH
COPY package.json /nav/package.json
RUN npm install --silent
COPY . /nav
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /nav/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
