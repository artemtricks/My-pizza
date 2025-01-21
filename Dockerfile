# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходный код и собираем проект
COPY . .

# Собираем проект для продакшн среды
RUN npm run build

# Stage 2: Настройка Nginx для обслуживания сборки
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Настроим Nginx для правильной работы с SPA (правильная маршрутизация)
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx в режиме фона
CMD ["nginx", "-g", "daemon off;"]