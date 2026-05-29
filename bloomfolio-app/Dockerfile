# Stage 1: Build the server files
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
# Force-inject the missing local host node adapter package
RUN npm install @astrojs/node --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2: Run the standalone app engine
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production --legacy-peer-deps
# Grab the compiled server distribution files
COPY --from=builder /app/dist ./dist

# Configure Astro network parameters inside the container
ENV HOST=0.0.0.0
ENV PORT=80
ENV NODE_ENV=production

EXPOSE 80
CMD ["node", "./dist/server/entry.mjs"]
