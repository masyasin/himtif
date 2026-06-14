# Tahap 1: Build React/Vite App menggunakan Node Alpine (Sangat Ringan)
FROM node:20-alpine AS builder

WORKDIR /app

# Hanya copy package.json dulu agar Docker bisa caching dependencies
COPY package*.json ./

# Install dependencies dengan mode ci agar lebih cepat dan ringan
RUN npm ci

# Copy seluruh source code
COPY . .

# Eksekusi proses build
RUN npm run build

# Tahap 2: Menyiapkan Nginx untuk menyajikan file statis
FROM nginx:alpine

# Copy hasil build dari Tahap 1 ke folder Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy konfigurasi Nginx khusus untuk React Router (Single Page App)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Buka port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
