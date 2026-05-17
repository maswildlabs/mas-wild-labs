FROM python:3.9-slim AS builder
WORKDIR /app
COPY . .
RUN pip install mkdocs mkdocs-material
RUN mkdocs build

FROM nginx:alpine
COPY --from=builder /app/site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]