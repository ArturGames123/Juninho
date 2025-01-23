let playerHealth = 100;
let enemyHealth = 100;
let coins = 60;
let isEnemyRecruited = false;

function updateUI() {
  document.getElementById("playerHealth").textContent = playerHealth;
  document.getElementById("enemyHealth").textContent = enemyHealth;
  document.getElementById("coins").textContent = coins;
}

function attack() {
  if (enemyHealth > 0) {
    enemyHealth -= 20;
    coins += 20 * 5 / 100; // 5 moedas por 1% de dano
    if (enemyHealth <= 0) handleEnemyDefeat();
    updateUI();
  }
}

function attackLevel2() {
  if (coins >= 10 && enemyHealth > 0) {
    coins -= 10;
    enemyHealth -= 50;
    coins += 50 * 5 / 100;
    if (enemyHealth <= 0) handleEnemyDefeat();
    updateUI();
  }
}

function attackLevel3() {
  if (coins >= 50 && enemyHealth > 0) {
    coins -= 50;
    enemyHealth -= 90; // Agora dá 90% de dano
    coins += 90 * 5 / 100;
    if (enemyHealth <= 0) handleEnemyDefeat();
    updateUI();
  }
}

function powerAttack() {
  if (coins >= 100 && enemyHealth > 0) {
    coins -= 100;
    enemyHealth = 0; // Mata o inimigo
    coins += 100; // Ganha moedas ao derrotar
    handleEnemyDefeat();
    updateUI();
  }
}

function recruit() {
  if (coins >= 15 && !isEnemyRecruited) {
    coins -= 15;
    isEnemyRecruited = true;
    alert("Juninhococô-v4q está do bem por 10 segundos!");
    setTimeout(() => {
      isEnemyRecruited = false;
      alert("Juninhococô-v4q voltou a ser inimigo!");
    }, 10000);
    updateUI();
  }
}

function enemyAttack() {
  if (enemyHealth > 0 && !isEnemyRecruited) {
    playerHealth -= 10; // Inimigo ataca 10% de vida
    if (playerHealth <= 0) {
      playerHealth = 0;
      alert("Você perdeu!");
    }
    updateUI();
  }
}

function handleEnemyDefeat() {
  alert("Você derrotou Juninhococô-v4q!");
  coins += 100; // Ganha 100 moedas ao derrotar
  setTimeout(() => {
    enemyHealth = 100; // Inimigo renasce após 20 segundos
    alert("Juninhococô-v4q renasceu!");
    updateUI();
  }, 20000);
}
function defense() {
  if (coins >= 45) {
    coins -= 45;
    playerHealth = 100; // Recupera 100% da vida
    enemyHealth -= 75; // Inimigo perde 75% da vida
    if (enemyHealth <= 0) handleEnemyDefeat();
    updateUI();
  } else {
    alert("Você não tem moedas suficientes para usar Defesa!");
  }
}

function balancedAttack() {
  if (coins >= 20) {
    coins -= 20;
    enemyHealth -= 75; // Causa 75% de dano ao inimigo
    coins += 75 * 5 / 100; // Ganha moedas proporcional ao dano causado
    if (enemyHealth <= 0) handleEnemyDefeat();
    updateUI();
  } else {
    alert("Você não tem moedas suficientes para usar Balanceado!");
  }
}
// Inicia o ataque do inimigo a cada 5 segundos
setInterval(enemyAttack, 5000);

updateUI();
