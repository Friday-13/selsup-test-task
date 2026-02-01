## Тестовое задание: Редактор параметров (React + TS + Git) Selsup

![screen](docs/screen.png)

## Задача

Реализовать на React (TypeScript) компонент(ы), которые позволяют редактировать структуру `Model` на основе списка `params: Param[]` и начального `model: Model`. Все параметры должны быть видны сразу и доступны для редактирования. Метод `getModel()` должен возвращать полную структуру `Model` со всеми проставленными значениями параметров.

## Стек

### Frontend

- TypeScript ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- React ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### Сборка и стили

- Vite ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- SASS ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

### Тестирование

- Vitest ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)

## Запуск

1. Установка зависимостей
```shell
npm i
```
2. Запуск dev-сервера
```shell
npm run dev
```

3. Запуск тестов
```shell
npm run test
```

## Решение

- Решение задачи в файле [src/param-editor.tsx](./src/param-editor.tsx)

- Тесты в файле [src/param-editor.test.tsx](./src/param-editor.test.tsx)

### Результаты тестов

```shell
 ✓ src/param-editor.test.tsx (3 tests) 268ms
   ✓ Param editor tests (3)
     ✓ Renders fields based on params 244ms
     ✓ Initializes correctly from model.paramValues 9ms
     ✓ Returns correct model from getModel after changes 14ms

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  15:54:15
   Duration  1.54s (transform 344ms, setup 90ms, import 409ms, tests 268ms, environment 537ms)

 % Coverage report from v8
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   88.88 |       50 |   91.66 |   94.11 |
 param-editor.tsx |   88.88 |       50 |   91.66 |   94.11 | 70
------------------|---------|----------|---------|---------|-------------------

```
