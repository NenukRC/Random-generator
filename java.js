function generateRandomNumber() {
  const min = 1;
  const max = 1000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById(
    "result"
  ).textContent = `Random Number: ${randomNumber}`;
}

document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomNumber);