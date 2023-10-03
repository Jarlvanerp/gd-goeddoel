FROM nginx:1.25-alpine3.18
COPY /public /usr/share/nginx/html
COPY /etc/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
