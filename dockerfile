# Install dependencies only when needed

FROM node:16-bullseye AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed

FROM node:16-bullseye AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run nest

FROM node:16-bullseye AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.build.json ./tsconfig.build.json

CMD npm run start
