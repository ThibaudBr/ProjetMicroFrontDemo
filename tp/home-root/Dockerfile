# build environment
FROM node:12.2.0-alpine as build
WORKDIR /home-root
ENV PATH /home-root/node_modules/.bin:$PATH
COPY package.json /home-root/package.json
RUN npm install --silent
COPY . /home-root

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /home-root/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
