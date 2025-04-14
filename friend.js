const jonathanDiv = document.getElementById('jonathan');
const matiasDiv = document.getElementById('matias');
const infoDiv = document.getElementById('info');

jonathanDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This is Jonathan info';
});

matiasDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This is Matias info';
});
