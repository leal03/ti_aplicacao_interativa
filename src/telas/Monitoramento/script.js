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
        div.classList.add('workout-item');
        div.innerHTML = `
          <div>
            <p>Tipo de Treino: ${workout.workoutType}</p>
            <p>Duração: ${workout.duration}</p>
            <p>Quantidade: ${workout.quantity}</p>
            <p>Exercícios: ${workout.exercises}</p>
          </div>
          <button class="delete-button" onclick="deleteWorkout(${workout.id})">Excluir</button>
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
        div.classList.add('foodplan-item');
        div.innerHTML = `
          <div>
            <p>Tipo de Alimentação: ${plan.foodType}</p>
            <p>Quantidade de Refeições ao Dia: ${plan.mealsPerDay}</p>
            <p>Suplementação: ${plan.supplements}</p>
            <p>Alimentos Ingeridos Frequentemente: ${plan.frequentFoods}</p>
          </div>
          <button class="delete-button" onclick="deleteFoodPlan(${plan.id})">Excluir</button>
        `;
        alimentacaoContainer.appendChild(div);
      });
    });

  // Função para excluir treino
  window.deleteWorkout = function(id) {
    fetch(`http://localhost:3000/api/workouts/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert('Treino excluído com sucesso');
        location.reload(); // Recarrega a página para atualizar a lista
      } else {
        alert('Erro ao excluir treino');
      }
    });
  };

  // Função para excluir plano alimentar
  window.deleteFoodPlan = function(id) {
    fetch(`http://localhost:3000/api/foodplans/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert('Plano alimentar excluído com sucesso');
        location.reload(); // Recarrega a página para atualizar a lista
      } else {
        alert('Erro ao excluir plano alimentar');
      }
    });
  };
});
