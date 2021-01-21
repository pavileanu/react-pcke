FROM alpine:3.11 as build
WORKDIR /app 
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN apk add --update npm python make g++
RUN npm install 
COPY . /app
RUN npm run build 

FROM nginx:1.17.4-alpine-perl

COPY --from=build /app/dist /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html/

EXPOSE 8085

USER nginx

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]