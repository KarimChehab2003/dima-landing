# ---------------------------------------------------------
# 1. Builder — install deps & generate standalone build
# ---------------------------------------------------------

FROM node:20-alpine AS builder

WORKDIR /app

# Installing dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Defining env variables with fake keys
ENV NEXT_PUBLIC_FIREBASE_API_KEY=""
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
ENV NEXT_PUBLIC_FIREBASE_APP_ID=""
ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""
ENV GOOGLE_GENAI_API_KEY=""

# Copying all files
COPY . .

# Build for production
RUN npm run build

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