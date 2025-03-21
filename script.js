'use strict'
document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('.nutrition-form');
const wrapper = document.querySelector('.wrapper');

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

    if(!gender||!age||!height||!weight||!steps||!trainings === undefined||!workActivity === undefined||!goal) {
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
        carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;
        break;

    case 'healthyLoss':
        targetCalories = tdee - 400;
        protein = weight * 2.2;
        fats = weight * 0.8;
        carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;
        break;

    case 'maintain':
        targetCalories = tdee;
        protein = weight * 2.5;
        fats = weight * 1;  
        carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;
        break;

    case 'extremeGain':
        targetCalories = tdee + 500;
        protein = weight * 2;
        fats = weight * 1.2;
        carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;
        break;

    case 'healthyGain':
        targetCalories = tdee + 200;
        protein = weight * 2.2;
        fats = weight * 1;
        carbs = (targetCalories - (protein * 4 + fats * 9)) / 4;
        break;
   }

   const resultHTML = `
   <div class="result-wrapper">
    <div class='result-container'>
        <div class='result-section'>
        <h2>Основные показатели:</h2>
        <p>Базовый обмен веществ (сколько организм потребляет на поддержание жизнедеятельности): <strong>${Math.round(bmr)} ккал</strong></p>
        <p>Ваша суточная норма с учетом активности: <strong>${Math.round(tdee)} ккал</strong></p>
        <p>Сколько нужно есть в зависимости от вашей цели: <strong>${Math.round(targetCalories)} ккал</strong></p>
        </div>
    <div class='result-section'>
        <h2>Рекомендация по БЖУ:</h2>
        <p>Белки: <strong>${Math.round(protein)}г</strong></p>
        <p>Жиры: <strong>${Math.round(fats)}г</strong></p>
        <p>Углеводы: <strong>${Math.round(carbs)}г</strong></p>
    </div>
    <button class='calculate-again-btn'>Рассчитать еще раз</button>
    </div>
    </div>
   `;

   wrapper.style.display = 'none';
   const oldResult = document.querySelector('.result-wrapper');
   if (oldResult) {
    oldResult.remove();
   }
   document.body.insertAdjacentHTML('beforeend', resultHTML);
   document.querySelector('.calculate-again-btn').addEventListener('click', function() {
    document.querySelector('.result-wrapper').remove();
    wrapper.style.display = 'block';
    form.reset();
});
});
});