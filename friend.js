const jonathanDiv = document.getElementById('jonathan');
const matiasDiv = document.getElementById('matias');
const infoDiv = document.getElementById('info');

jonathanDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This is Jonathan info';
});

matiasDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This is Matias info';
});

document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("_____").value;
  let resultText = document.getElementById("_____");
  let resultImage = document.getElementById("_____");

  if (age < 15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "YOUR_BICYCLE_IMAGE_LINK_HERE";
  } else if (age > 16 && age < 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "YOUR_CAR_IMAGE_LINK_HERE";
  } else if (age > 28) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
    resultImage.src = "YOUR_RENTAL_CAR_IMAGE_LINK_HERE";
  }
});
