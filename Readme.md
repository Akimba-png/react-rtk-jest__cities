# Мультистраничное SPA приложение с проверкой авторизации
Сервис для путешественников по выбору арендуемого жилья.  
Выбирайте один из шести популярных городов, применяйте сортировку  
и получайте актуальный список предложений синхронизированный с интерактивной картой.  
Для каждого предложения доступна отдельная страница с описанием,  
а для зарегистрированных пользователей доступен просмотр избранных предложений.  
Общее кол-во страниц в сервисе - 5

## Проект создан с использованием связки React-RTK-PropTypes-Jest

## Технологический стек:
- React;
- PropTypes;
- RTK Reselect Thunk (+ custom middleware);
- React Router (приватный маршрут);
- React Hook Form;
- Axios (с применением интерсепторов);
- Leaflet;
- Jest;
- React Testing Library;

## Используемые паттерны:
- Паттерн адаптер - адаптация получаемых с сервера данных;
- Прокси паттерн - стилизация компонентов в зависимости от места использования;
- Кастомные хуки:
- Запросы к серверу;

## Сценарии:

### Запуск проекта:
```bash
npm start
```

### Запуск тестов:
```bash
npm test
```
