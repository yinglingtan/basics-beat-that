// ===== Requirements ===== //
// 1) there are 2 players and players take turns
// 2) when a player clicks submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6
// 3) the player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first
// 4) after both players have rolled and chosen dice order, the player with the higher combined number wins

// ==== problem breakdown and planing ==== //
// ver 1. rolls 2 dice and turns the output for 1 player. That player chooses the dice order and get the correct return output.
// ver 2. refactored code to include player 2
//    - global variables for currentPlayer; allPlayersScore
//    - refactor outputMessages to interact with each player, 1 and 2
//    - write logic for player 1 to go first then player 2, and finally point towards comparing score
// ver 3. implement comparing dice scores and declare winner
// ver 4. reset the game so that the players can play continually without refreshing the browser page

// Global Variables
var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var gameState = GAME_STATE_DICE_ROLL;

var currentPlayerRolls = [];

var currentPlayer = 1;
var allPlayersScore = [];

// Helper Function
var rollDice = function () {
  console.log("Control flow: start of rollDice()");
  // Random decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // Random integer from 1 to 6
  var randomInteger = Math.floor(randomDecimal) + 1;

  console.log("rollDice output, randomInteger: ", randomInteger);
  return randomInteger;
};

var rollDiceForPlayer = function () {
  console.log("Control flow: start of rollDiceForPlayer()");
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter = counter + 1;
  }

  console.log(
    "rollDiceForPlayer changes, currentPlayerRolls: ",
    currentPlayerRolls
  );
  return;
  "Welcome, Player " +
    currentPlayer +
    "<br><br>You rolled:<br>Dice 1; " +
    currentPlayerRolls[0] +
    " | Dice 2:" +
    currentPlayerRolls[1] +
    ".<br><br>Now, please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value.";
};

var getPlayerScore = function (playerInput) {
  var playerScores;
  // input validation
  if (playerInput != 1 && playerInput != 2) {
    console.log(
      "Control flow: input validation, invalid inout... NOT 1 AND NOT 2"
    );
    return;
    "Error! Please only input '1' or '' to choose which dice to use as the first digit.<br><br>Your dice rolls are:<br>Dice 1: " +
      currentPlayerRolls[0] +
      " | Dice 2: " +
      currentPlayerRolls[1] +
      ".";
  }
  // input == 1
  if (playerInput == 1) {
    console.log("Control flow: input == 1");
    var playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
    return "Your chosen value is: " + playerScore;
  }

  // input == 2
  if (playerInput == 2) {
    console.log("Control flow: input == 2");
    var playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }
  // Store playerScore in array
  allPlayersScore.push(playerScore);

  // clear current player rolls array
  currentPlayer = [];
  return "Player" + currentPlayer + ", your chosen value is: " + playerScore;
};

var main = function (input) {
  console.log("Checking game state on submit click: ", gameState);
  console.log("Checking game state on submit click: ", currentPlayer);
  var myOutputMessage = "";

  if (gameState == GAME_STATE_DICE_ROLL) {
    console.log("Control flow: gameState == GAME_STATE_DICE_ROLL");

    // Display dice rolled as output message
    outputMessage = rollDiceForPlayer();

    // Change the game state
    gameState = GAME_STATE_CHOOSE_DICE_ORDER;
    return outputMessage;
  }

  if (gameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    console.log("Control flow: gameState == GAME_STATE_CHOOSE_DICE_ORDER");

    // Cal playerScore function
    outputMessage = getPlayerScore(input);

    if (currentPlayer == 1) {
      console.log("Control flow: end of player 1's turn, now player 2's turn");
      currentPlayer = 2;
      gameState = GAME_STATE_DICE_ROLL;
      return outputMessage + "<br><br>It is now player 2's turn!";
    }

    if (currentPlayer == 2) {
    }
    return outputMessage;
  }
};
