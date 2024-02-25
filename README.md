### Данный репозиторий содержит исходный код React приложения для автоматического заполнения сопроводительного письма с учётом CV и текста вакансии на базе YaGPT.

<br>

#### Как использовать локально:
- Установка зависимостей
```bash
git clone https://github.com/allseeteam/cover-letter-enchancer-frontend
cd cover-letter-enchancer-frontend
npm install
```
- Запуск приложения
```bash
npm start
```

<br>

#### Как использовать с docker:
```bash
git clone https://github.com/allseeteam/cover-letter-enchancer-frontend
сd cover-letter-enchancer-frontend
docker build --build-arg REACT_APP_API_URL=http://localhost:8000 -t cover-letter-enchancer-frontend .
docker run -d -p 3000:80 --name cover-letter-enchancer-frontend-container cover-letter-enchancer-frontend
```
