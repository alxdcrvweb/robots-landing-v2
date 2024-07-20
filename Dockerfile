FROM node:18-alpine AS build

# Установка git и другие необходимые зависимости
RUN apk add --no-cache libc6-compat git

WORKDIR /app

# Настройка Git для использования HTTPS вместо SSH
RUN git config --global url."https://".insteadOf ssh://

COPY package.json yarn.lock ./

# Установка зависимостей
RUN apk add python3
RUN yarn install 

COPY . .

# Сборка приложения
RUN yarn build

# Продакшн образ
FROM node:18-alpine AS production

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копирование собранных файлов и зависимостей
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]
