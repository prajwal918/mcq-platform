# ==============================================================================
# Stage 1: Build Application Production Assets
# ==============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies deterministically
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit

# Copy source code and compile production assets
COPY . .
RUN npm run build

# ==============================================================================
# Stage 2: Hardened Nginx Production Web Server
# ==============================================================================
FROM nginx:alpine

# Security Metadata
LABEL maintainer="mcq-platform"
LABEL version="2.0.0"
LABEL description="MCQ Platform - Hardened Static Web Stack"
LABEL security.hardened="true"

# Copy static distribution artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Enforce secure non-root file ownership
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Container Healthcheck for zero-downtime monitoring
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]