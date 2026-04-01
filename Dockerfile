# Dependencies stage
FROM node:20-bookworm-slim AS deps

WORKDIR /app

ENV CI=true \
    NODE_ENV=development \
    NODE_OPTIONS=--max-old-space-size=512 \
    npm_config_update_notifier=false \
    npm_config_audit=false \
    npm_config_fund=false \
    npm_config_loglevel=warn

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies on Debian-based image to avoid Alpine npm crashes on some servers
RUN npm ci --include=dev --legacy-peer-deps --no-audit --no-fund --maxsockets=2 \
    && test -f /app/node_modules/vite/bin/vite.js

# Build stage
FROM node:20-bookworm-slim AS builder

WORKDIR /app

ENV CI=true \
    NODE_ENV=development \
    NODE_OPTIONS=--max-old-space-size=512

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

# Healthcheck for both docker run and docker compose deployments
HEALTHCHECK --interval=30s --timeout=10s --start-period=20s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8213/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
