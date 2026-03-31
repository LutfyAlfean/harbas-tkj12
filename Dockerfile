# syntax=docker/dockerfile:1.7

# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

ENV CI=true
ENV NODE_ENV=development

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies with BuildKit cache for faster rebuilds
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev --legacy-peer-deps --prefer-offline --no-audit --no-fund

# Copy source code
COPY . .

# Build the application
RUN ./node_modules/.bin/vite build

# Production stage with Nginx
FROM nginx:alpine AS production

ENV NODE_ENV=production

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8213
EXPOSE 8213

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
