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
});
