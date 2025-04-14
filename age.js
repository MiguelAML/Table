document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age <= 15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "https://i.etsystatic.com/19543171/r/il/f13c94/4513785165/il_570xN.4513785165_h290.jpg";
  } else if (age >= 16 && age <= 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m8-competition-coupe-flyout.png";
  } else if (age >= 25) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
    resultImage.src = "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFO32LK3CRMRBHEIQLVYPZ2QSE.jpg";
  }
});

const container = document.getElementById("list-container");

for (let i = 1; i <= 5; i+=3) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i;
  if (i <= 20) {
    p.style.color = "blue";
  } else (i >= 20){
    p.style.color = "red";
  }

  container.appendChild(p);
}

let j = 1;
while (j <= 5) {
  const p = document.createElement("p");
  p.textContent = "While loop item #" + j;
  if (j <= 20) {
    p.style.color = "blue";
  } else (j >= 20) {
    p.style.color = "red";
  }

  container.appendChild(p);
  j+=3;
}

