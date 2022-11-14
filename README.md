# 7 MVC - Igor
### Задание
Разработать проект на основе паттерна MVC, используя базу данных из 4 модуля этого курса.
### Настройка и запуск проекта
1. Установите все зависимости:
```
    npm install
```
2. Создайте файл .env, скопируйте туда поля из файла .env.sample и заполните их своими данными.
3. Установите mysql 5.7.
4. После установки выполните следующие команды для создания базы данных с помощью файла DbBackup.sql, который лежит в этом репозитории:
```
    mysql -u root -p
    create database dbName;
    use dbName;
    source DbBackup.sql;
```
5. Запуск проекта выполняется командой:
```
    npm run watcher
```
### Описание страниц на сайте
1. **'/'** - главная страница.
2. **'/companyAddForm'** - форма добавления компании в БД.
3. **'/buildingAddForm'** - форма добавления здания в БД.
4. **'/officeAddForm'** - форма добавления офиса в БД.
5. **'/companies'** - все компании.
6. **'/offices'** - все офисы.
7. **'/buildings'** - все здания.
8. **'/cities'** - все города.
9. **'/countries'** - все страны.
10. **'/company?id=1'** - отдельная страница компании.
11. **'/office?id=1'** - отдельная страница офиса.
12. **'/building?id=1'** - отдельная страница здания.
13. **'/country?id=1'** - отдельная страница страны.
14. **'/companyChangeForm?id=1'** - форма изменения данных компании.
15. **'/officeChangeForm?id=1'** - форма изменения данных офиса.
16. **'/buildingChangeForm?id=1'** - форма изменения данных здания.
17. **'/buildingsByCity?city=Город1'** - здания, которые находятся в определенном городе.
18. **'/workerSignInForm'** - страница входа в личный кабинет работника
19. **'/workerSignUpForm'** - страница с формой для регистрации работника
20. **'/workerProfileInformation'** - на этой странице работник может посмотреть информацию о себе и изменить ее
21. **'/workerPersonalAccount'** - главная страница с возможностями авторизованных работников
22. **'/workerCompanies'** - страница, позволяющая работнику посмотреть, в каких компаниях он работает

Присутствует возможность удалять компании, офисы и здания в карточках, которые находятся на этих страницах - **'/companies', '/offices', '/buildings'**.

### Ключевые классы и папки проекта

#### Основные папки
- src
    - controllers
    - errors
    - fonts
    - img
    - models
    - routes
    - scss
    - templates
    - views

#### Основные классы
##### AbstractController
Методы:
- async execute(req, res, next) - определяет метод запроса и вызывает необходимую функцию для обработки этого запроса.
- override async processGet(req, res, next) - обрабатывает get запрос.
- async processPost(req, res) - обрабатывает post запрос.
- isNumber(data) - проверяет, являются ли данные числом.
- getIdError(id) - возвращает объект ошибки с определенным текстом.
##### Environment
Методы:
- static getDbName() - возвращает название базы данных.
- static getDbHost() - возвращает хост.
- static getDbPassword() - возвращает пароль от базы данных.
- static getDbUserName() - возвращает имя пользователя базы данных.
##### AbstractRouter
Методы:
- createGetRoutes(path, controller) - создает пути для get запросов.
- createPostRoutes(path, controller) - создает пути для post запросов.
- createRoutes() - создает все пути, определяя по методу запроса, какой именно нужно создать запрос.
- getRouter() - возвращает роутеры.
##### View
Методы:
- getTemplate() - возвращает шаблон.
- setTemplate(template) - устанавливает шаблон.
##### App
Методы:
- initAllRouters(routerClasses) - инициализирует все роутеры.
- initLiquid() - инициализирует необходимые параметры liquid.
- initBodyParser() - инициализирует параметры bodyParser.
- initHandlerError() - инициализирует обработчик ошибок в express.
- startListener(port) - запускает сервер.
##### Database
Методы:
- static getConnection() - возвращает подключение к базе данных.
- static async sendData(query, params) - посылает данные в базу данных.
- static async getData(query) - возвращает данные из базы данных.
- static async deleteDataById(id, tableName) - удаляет строку по указанном полю id