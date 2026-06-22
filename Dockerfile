# Dev container for the gordonfrois.com homepage (Express + Vite).
# Runs on Linux, so the macOS `reusePort` bind quirk does not apply.
FROM node:22-slim

WORKDIR /app

# Install dependencies first for better layer caching.
# Lockfile is present, so use `npm ci` for a reproducible install.
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# Copy the rest of the source. In dev (compose) this is shadowed by a
# bind-mount so edits on the host are picked up live.
COPY . .

ENV NODE_ENV=development
ENV PORT=5050
EXPOSE 5050

CMD ["npm", "run", "dev"]
