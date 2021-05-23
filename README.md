## Реализованная функциональность (подробно в презентации)
* Профили (регистрация и авторизация)
* Карты (создание счета, пополнение и оплата услуг, просмотр баланса)
* История транзакций
* События и услуги

## Особенность проекта в следующем (подробно в презентации)
* Кроссплатформенное приложение
* Удобное моментальное создание виртуального счета

## Основной стек технологий веба

* React
* Nextjs
* Typescript
* Redux
* Tailwind
* Material UI

## Демо

[ссылка](http://citi-card.dchudinov.ru)

Реквизиты тестового пользователя: email: admin@test.ru, пароль: testuser

## Запуск готового docker образа

```
docker pull semyonbitcoin/city-card-front
docker run -d -p 3000:3000 semyonbitcoin/city-card-front
```

Откройте в браузере [http://localhost:3000](http://localhost:3000) 

## Запуск без докера

```bash

sudo apt install nodejs
sudo apt install npm 

yarn
#or
npm install

yarn dev
```

Откройте в браузере [http://localhost:3000](http://localhost:3000) 

## Запуск в докере

```
docker build -t citi-card-front .
docker run
```

# Разработчики

* [Дмитрий Чудинов](https://t.me/dchudik) - backend
* [Новиков Семен](https://t.me/semyon_dev) - backend
* [Эльдар Курманалиев](https://t.me/elik_sir) - web app


