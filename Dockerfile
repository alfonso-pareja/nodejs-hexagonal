# =====================
# 1) Build stage
# =====================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos manifests primero (mejor cache)
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

# Copiamos el código
COPY src ./src

# Build (TypeScript + aliases)
RUN npm run build


# =====================
# 2) Runtime stage
# =====================
FROM node:20-alpine AS runner

WORKDIR /app

# Variables necesarias en runtime
ENV NODE_ENV=production

# Solo dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copiamos el código compilado
COPY --from=builder /app/dist ./dist

# Puerto expuesto (documental, Kubernetes no lo requiere)
EXPOSE 3000

# Arranque
CMD ["node", "dist/server.js"]
