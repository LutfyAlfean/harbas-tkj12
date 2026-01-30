# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install bun for faster package management
RUN npm install -g bun

# Copy package files
COPY package.json bun.lockb* package-lock.json* ./

# Install dependencies
RUN bun install --frozen-lockfile || npm ci

# Copy source code
COPY . .

# Build the application
RUN bun run build || npm run build

# Production stage with Nginx
FROM nginx:alpine AS production

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8213
EXPOSE 8213

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
