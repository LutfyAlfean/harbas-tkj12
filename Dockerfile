# Dependencies stage
FROM node:20-alpine AS deps

WORKDIR /app

ENV CI=true
ENV NODE_ENV=development
ENV NODE_OPTIONS=--max-old-space-size=512

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies - no cache mount to avoid corruption issues
RUN npm ci --include=dev --legacy-peer-deps --no-audit --no-fund --maxsockets=3 \
    && test -f /app/node_modules/vite/bin/vite.js

# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

ENV CI=true
ENV NODE_ENV=development

COPY --from=deps /app/node_modules ./node_modules

# Copy source code after dependencies so node_modules is never replaced
COPY . .

# Build the application without relying on .bin symlink resolution
RUN node /app/node_modules/vite/bin/vite.js build

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
