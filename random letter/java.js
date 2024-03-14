function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //return alphabet[Math.floor(Math.random() * alphabet.length)];
  document.getElementById("result").textContent = `Random Letter: ${alphabet[Math.floor(Math.random() * alphabet.length)]}`;
}