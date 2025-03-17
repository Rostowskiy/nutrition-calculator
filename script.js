'use strict'
document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('.nutrition-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.querySelector('#age').value);
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const steps = parseFloat(document.querySelector('#steps').value);
    const trainings = parseFloat(document.querySelector('#trainings').value);
    const workActivity = parseFloat(document.querySelector('#workActivity').value);
    const goal = document.querySelector('#goal').value;

    if(!gender||!age||!height||!weight||!steps||!trainings||!workActivity||!goal) {
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

   let tdee = bmr * (steps + trainings + workActivity);

   let targetCalories, protein, fats, carbs;

   switch(goal) {
    case 'extremeLoss':
        targetCalories = tdee - 800;
        protein = weight * 2.5;
        fats = weight * 0.7;
        break;

    case 'healthyLoss':
        targetCalories = tdee - 400;
        protein = weight * 2.2;
        fats = weight * 0.8;
        break;

    case 'maintain':
        targetCalories = tdee;
        protein = weight * 2,5;
        fats = weight * 1;
        break;

    case 'extremeGain':
        targetCalories = tdee + 500;
        protein = weight * 2;
        fats = weight * 1.2;
        break;

    case 'healthyGain':
        targetCalories = tdee + 200;
        protein = weight * 2.2;
        fats = weight * 1;
        break;
   }
   
   carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;

   const resultHTML = `
   <div class="result-container">
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
