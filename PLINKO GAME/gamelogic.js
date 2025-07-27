// gameLogic.js

let balance = 0;
let betAmount = 10;

// DOM elements
let balanceEl, depositInput, betInput;

function initGameLogic() {
  balanceEl = document.getElementById('balance');
  depositInput = document.getElementById('deposit');
  betInput = document.getElementById('bet');

  if (!balanceEl || !depositInput || !betInput) {
    console.warn("UI elements missing");
    return;
  }

  updateBalanceUI();
  // Set initial bet amount in UI
  betInput.value = betAmount;
   // Add this event listener to update betAmount properly
  betInput.addEventListener('input', () => {
    const value = parseFloat(betInput.value);
    if (!isNaN(value) && value > 0) {
      betAmount = value;
    } else {
      console.warn('Invalid bet input:', betInput.value);
    }
  });
}

// Called from "Add Balance" button
function addBalance() {
  const amount = parseFloat(depositInput.value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalanceUI();
  }
  depositInput.value = '';
}

// Deduct bet amount when ball is added
function tryPlaceBet() {
  if (balance >= betAmount) {
    balance -= betAmount;
    updateBalanceUI();
    return true;
  } else {
    alert("Not enough balance to place the bet!");
    return false;
  }
}

// Apply multiplier when ball lands in sink
function applyMultiplier(multiplier) {
  console.log('applyMultiplier called with:', multiplier);
  console.log('Current betAmount:', betAmount);

  if (typeof multiplier !== 'number' || isNaN(multiplier)) {
    console.warn('Invalid multiplier:', multiplier);
    return;
  }

  if (typeof betAmount !== 'number' || isNaN(betAmount)) {
    console.warn('Invalid betAmount:', betAmount);
    return;
  }

  const winnings = multiplier * betAmount;
  balance += winnings;
  updateBalanceUI();
}



function updateBalanceUI() {
  if (balanceEl) {
    balanceEl.textContent = balance.toFixed(2);
  }
}

// Expose functions globally
window.initGameLogic = initGameLogic;
window.addBalance = addBalance;
window.tryPlaceBet = tryPlaceBet;
window.applyMultiplier = applyMultiplier;
