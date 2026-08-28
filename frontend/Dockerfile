FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.27-alpine

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d

RUN sed -i 's#pid[[:space:]]*/run/nginx.pid;#pid /tmp/nginx.pid;#' /etc/nginx/nginx.conf

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]