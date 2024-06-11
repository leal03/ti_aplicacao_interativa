document.addEventListener('DOMContentLoaded', function() {
  const submenuItems = document.querySelectorAll('.submenu li');

  submenuItems.forEach(function(item) {
    const arrow = item.querySelector('.arrow');
    const content = item.querySelector('.content');

    item.addEventListener('click', function() {
      content.classList.toggle('hidden');
      arrow.innerHTML = content.classList.contains('hidden') ? '&#9660;' : '&#9650;';
    });
  });

  fetch('http://localhost:3000/api/workouts')
    .then(response => response.json())
    .then(workouts => {
      const treinosContainer = document.getElementById('visualizar-treinos');
      workouts.forEach(workout => {
        const div = document.createElement('div');
        div.innerHTML = `
          <p>Tipo de Treino: ${workout.workoutType}</p>
          <p>Duração: ${workout.duration}</p>
          <p>Quantidade: ${workout.quantity}</p>
          <p>Exercícios: ${workout.exercises}</p>
        `;
        treinosContainer.appendChild(div);
      });
    });

  fetch('http://localhost:3000/api/foodplans')
    .then(response => response.json())
    .then(foodPlans => {
      const alimentacaoContainer = document.getElementById('visualizar-alimentacao');
      foodPlans.forEach(plan => {
        const div = document.createElement('div');
        div.innerHTML = `
          <p>Tipo de Alimentação: ${plan.foodType}</p>
          <p>Quantidade de Refeições ao Dia: ${plan.mealsPerDay}</p>
          <p>Suplementação: ${plan.supplements}</p>
          <p>Alimentos Ingeridos Frequentemente: ${plan.frequentFoods}</p>
        `;
        alimentacaoContainer.appendChild(div);
      });
    });
});
