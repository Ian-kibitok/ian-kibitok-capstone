FROM nginx:1.27-alpine

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

COPY public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /run && \
    chown -R appuser:appgroup \
        /usr/share/nginx/html \
        /var/cache/nginx \
        /var/run \
        /var/log/nginx \
        /run

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]