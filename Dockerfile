# Используем официальный Node.js образ как базовый
FROM node:16 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Используем образ nginx для финальной стадии
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа в директорию, где Nginx будет их обслуживать
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Стартуем Nginx
CMD ["nginx", "-g", "daemon off;"]