# build environment
FROM node:12.2.0-alpine as build
WORKDIR /display-ticket
ENV PATH /display-ticket/node_modules/.bin:$PATH
COPY package.json /display-ticket/package.json
RUN npm install --silent
COPY . /display-ticket
RUN npm run build
CMD ["npm", "run", "serve"]
## production environment
#FROM nginx:1.16.0-alpine
#
#RUN rm -v /etc/nginx/conf.d/default.conf
#ADD default.conf /etc/nginx/conf.d/
#COPY --from=build /display-ticket/dist /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]
