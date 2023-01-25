# build environment
FROM node:16.14.0-alpine as build
WORKDIR /buy
ENV PATH /buy/node_modules/.bin:$PATH
COPY package.json /buy/package.json
RUN npm install --silent
COPY . /buy
RUN npm run build
CMD ["npm", "run", "serve"]
## production environment
#FROM nginx:1.16.0-alpine
#
#RUN rm -v /etc/nginx/conf.d/default.conf
#ADD default.conf /etc/nginx/conf.d/
#COPY --from=build /buy/dist /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]
