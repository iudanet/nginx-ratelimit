# Nginx Rate limit


Пример конфигурации Nginx с проверкой Header `device_id` и огарничением по скорости на прием запросов 2 в сек (30 в мин)


* пример запуска
```
docker compose up

k6 run k6.js
```