// Global variable to store the player's bankroll
let bankroll = 2023; // Initialize the player's bankroll to 2023

// Function to get the current bankroll
function getBankroll() {
  return bankroll;
}

// Function to set a new bankroll value
function setBankroll(newBalance) {
  if (Number.isInteger(newBalance)) {
    bankroll = newBalance;
    updateBankrollDisplay();
  } else {
    console.error("Bankroll must be an integer.");
  }
}

// Function to update the bankroll display in the betting section
function updateBankrollDisplay() {
  const bankrollDisplay = document.getElementById("bankrollDisplay");
  if (bankrollDisplay) {
    bankrollDisplay.textContent = `$${bankroll}`;
  }
}

// Function to transition to the betting interface
function timeToBet() {
  // Hide the player's actions section
  const playersActions = document.getElementById("playersActions");
  if (playersActions) {
    playersActions.classList.add("hidden");
  }

  // Show the betting section
  const bettingSection = document.getElementById("betting");
  if (bettingSection) {
    bettingSection.classList.remove("hidden");
  }

  // Update the bankroll display
  updateBankrollDisplay();
}

// Function to handle the wager and transition to the player's actions interface
function makeWager() {
  const usersWagerInput = document.getElementById("users-wager");
  const wager = parseInt(usersWagerInput.value, 10);

  if (isNaN(wager) || wager <= 0) {
    console.error("Please enter a valid wager amount.");
    return;
  }

  if (wager > bankroll) {
    console.error("You cannot wager more than your current bankroll.");
    return;
  }

  console.log(`User's wager: $${wager}`);
  setBankroll(bankroll - wager); // Deduct the wager from the bankroll
  timeToPlay(); // Transition to the player's actions interface
}

// Function to transition to the player's actions interface
function timeToPlay() {
  // Show the player's actions section
  const playersActions = document.getElementById("playersActions");
  if (playersActions) {
    playersActions.classList.remove("hidden");
  }

  // Hide the betting section
  const bettingSection = document.getElementById("betting");
  if (bettingSection) {
    bettingSection.classList.add("hidden");
  }
}