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
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resulText");
  let resultImage = document.getElementById("resultImage");

  if (age < 15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "Yhttps://i.etsystatic.com/19543171/r/il/f13c94/4513785165/il_570xN.4513785165_h290.jpg";
  } else if (age > 16 && age < 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m8-competition-coupe-flyout.png";
  } else if (age > 28) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
    resultImage.src = "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFO32LK3CRMRBHEIQLVYPZ2QSE.jpg";
  }
});
