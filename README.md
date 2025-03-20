# Калькулятор питания

## Описание
Калькулятор питания - это веб-приложение, которое помогает рассчитать индивидуальные потребности в калориях и макронутриентах на основе персональных данных пользователя, учитывая уровень физической активности и цели.

## Функциональность
- Расчет базового обмена веществ (BMR) по формуле Миффлина-Сан Жеора
- Расчет суточной нормы калорий с учетом:
  - Количества шагов в день
  - Количества тренировок в неделю
  - Уровня физической активности на работе
- Расчет индивидуальных потребностей в макронутриентах (белки, жиры, углеводы)
- Корректировка калорий в зависимости от выбранной цели

## Как использовать
1. Заполните форму своими данными:
   - Пол
   - Возраст
   - Рост (в см)
   - Вес (в кг)
   - Среднее количество шагов в день
   - Количество тренировок в неделю
   - Уровень физической активности на работе
   - Цель

2. Выберите свою цель:
   - Экстремальное похудение (-800 ккал)
   - Качественное похудение (-400 ккал)
   - Рекомпозиция тела (поддержание веса)
   - Грязный массонабор (+500 ккал)
   - Чистый массонабор (+200 ккал)

3. Получите персональные рекомендации:
   - Базовый обмен веществ
   - Суточную норму калорий с учетом активности
   - Целевое количество калорий
   - Рекомендации по макронутриентам (БЖУ)

## Коэффициенты активности

### Шаги в день:
- Менее 3 000 шагов: 1.05
- 3 000 - 5 000 шагов: 1.1
- 5 000 - 7 500 шагов: 1.15
- 7 500 - 10 000 шагов: 1.2
- 10 000 - 15 000 шагов: 1.25
- Более 15 000 шагов: 1.3

### Тренировки в неделю:
- Ни одной: 0
- 1 тренировка: 0.05
- 2 тренировки: 0.1
- 3 тренировки: 0.15
- 4 тренировок: 0.20
- 5 тренировок: 0.25
- 6 тренировок: 0.30
- 7 тренировок: 0.35

### Активность на работе:
- Низкий уровень: 0
- Средний уровень: 0.1
- Высокий уровень: 0.2

## Формулы расчета
- **BMR для мужчин** = (10 × вес) + (6.25 × рост) - (5 × возраст) + 5
- **BMR для женщин** = (10 × вес) + (6.25 × рост) - (5 × возраст) - 161
- **TDEE** = BMR × (коэффициент шагов + коэффициент тренировок + коэффициент рабочей активности)

## Рекомендации по макронутриентам
### Белки (г/кг веса):
- Экстремальное похудение: 2.5
- Качественное похудение: 2.2
- Поддержание: 2.5
- Грязный массонабор: 2.0
- Чистый массонабор: 2.2

### Жиры (г/кг веса):
- Экстремальное похудение: 0.7
- Качественное похудение: 0.8
- Поддержание: 1.0
- Грязный массонабор: 1.2
- Чистый массонабор: 1.0

### Углеводы:
Оставшиеся калории после расчета белков и жиров
(1г белка = 4 ккал, 1г жира = 9 ккал, 1г углеводов = 4 ккал)

## Технологии
- HTML5
- CSS3
- JavaScript (ES6+)

## Установка и запуск
1. Скачайте все файлы проекта
2. Откройте файл `index.html` в веб-браузере