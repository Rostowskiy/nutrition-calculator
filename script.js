'use strict'
document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('.nutrition-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.querySelector('#age').value);
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const activity = parseFloat(document.querySelector('#activity').value);
    const goal = document.querySelector('#goal').value;

    if(!name||!gender||!age||!height||!weight||!activity||!goal) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
   let bmr;
   if(gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
   }
   else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
   }

   let tdee = bmr * activity;

   let targetCalories, protein, fats, carbs;

   switch(goal) {
    case 'loss':
        targetCalories = tdee - 500;
        protein = weight * 2.2;
        fats = weight * 1;
        break;

    case 'gain':
        targetCalories = tdee + 300;
        protein = weight * 2.5;
        fats = weight * 1.2;
        break;

    case 'maintain':
        targetCalories = tdee;
        protein = weight * 2;
        fats = weight * 1;
        break;
   }
   
   carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;

   const resultHTML = `
   <div class="result-container">
   <h2>Результаты для ${name}</h2>
    <div class='result-section'>
        <h3>Основные показатели:</h3>
        <p>Базовый обмен веществ (сколько организм потребляет на поддержание жизнедеятельности): ${Math.round(bmr)} ккал</p>
        <p>Ваша суточная норма с учетом активности: ${Math.round(tdee)} ккал</p>
        <p>Сколько нужно есть в зависимости от вашей цели: ${Math.round(targetCalories)} ккал</p>
        </div>
    <div class='result-section'>
        <h3>Рекомендация по БЖУ:</h3>
        <p>Белки: ${Math.round(protein)}г</p>
        <p>Жиры: ${Math.round(fats)}г</p>
        <p>Углеводы: ${Math.round(carbs)}г</p>
        </div>
    </div>
   `;
   const oldResult = document.querySelector('.result-container');
   if (oldResult) {
    oldResult.remove();
   }
   form.insertAdjacentHTML('afterend', resultHTML);
});
});
