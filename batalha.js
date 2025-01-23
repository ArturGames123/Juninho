let playerHealth = 100;
let enemyHealth = 100;
let coins = 60;

function updateUI() {
  document.getElementById("playerHealth").textContent = playerHealth;
  document.getElementById("enemyHealth").textContent = enemyHealth;
  document.getElementById("coins").textContent = coins;
}

function attack() {
  if (enemyHealth > 0) {
    enemyHealth -= 20;
    coins += 20 * 5 / 100; // 5 moedas por 1% de dano
    if (enemyHealth < 0) enemyHealth = 0;
    updateUI();
  }
}

function attackLevel2() {
  if (coins >= 10 && enemyHealth > 0) {
    coins -= 10;
    enemyHealth -= 50;
    coins += 50 * 5 / 100;
    if (enemyHealth < 0) enemyHealth = 0;
    updateUI();
  }
}

function attackLevel3() {
  if (coins >= 50 && enemyHealth > 0) {
    coins -= 50;
    enemyHealth -= 100;
    coins += 100 * 5 / 100;
    if (enemyHealth < 0) enemyHealth = 0;
    updateUI();
  }
}

function recruit() {
  alert("Juninhococô-v4q está do bem por 5 segundos!");
  setTimeout(() => alert("Juninhococô-v4q voltou a ser inimigo!"), 5000);
}

updateUI();
