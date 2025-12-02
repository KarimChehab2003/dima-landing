# ---------------------------------------------------------
# 1. Builder — install deps & generate standalone build
# ---------------------------------------------------------

FROM node:20-alpine AS builder

WORKDIR /app

# Installing dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copying all files
COPY . .

# Build for production
RUN npm run builder

# ---------------------------------------------------------
# 2. Runner — lightweight prod server
# ---------------------------------------------------------

FROM node:20-alpine AS runner

WORKDIR /app

# Copy standalone server
COPY --from=builder /app/.next/standalone ./

# Copy static files
COPY --from=builder /app/.next/static ./public/_next/static

# Copy public folder
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD [ "node","server.js" ]