
/*Function which radomly selects computer's choice of weapon*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;

    if (num == 0) {
        computerChoice = "Rock";
    }
    else if (num == 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    return computerChoice;

}

/*Function witch compares players choices and determines whether player wins or loses*/
function playRound() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    /*converts all input to lowercase*/
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    /*If player chooses rock*/
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock breaks scissors.");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        alert( "You lose! Paper covers rock.");

    }
    /*If player chooses paper*/
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper covers rock.");

    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors cuts paper.");

    }
    /*If player chooses scissors*/
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors cuts paper.");

    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("You lose! Rock breaks scissors.");

    }
    /*If player and computer choose the same weapon*/
    else if (playerSelection === computerSelection) {
        alert("It's a tie! You've both selected the same.");

    }
    else {
        alert("Invalid input");
    }

}
//loop to play the game three times
function repeatGame() {
    for (i = 0; i < 3; i++){
        //computer generates new choice each time
        getComputerChoice();
        //play round of rock paper scissors
        playRound();    
    }
}

//output lyrics to html
function playSong() {
    //for loop to itterate through the song
    for (i = 99; i >= 2; i--) {
        let minusBeer = i - 1;
        document.getElementById("loopSongText").innerHTML += "<br />" + i + " Bottles of beer on the wall " + i + " Bottles of beer. <br /> You take one down, you pass it aroun, <br />" + minusBeer + " Bottles of beer on the wall. <br />";
    }
    //not par of the loop as the lyrics here occur only once, when the song ends.
    document.getElementById("songText").innerHTML += "One Bottle of beer on the wall, One bottle of beer <br /> You take it down you pass it around, 0 bottles of beer on the wall. <br /> No more bottles of beer on the wall, no more bottles of beer. <br />Go to the store buy some more, 99 bottles of beer on the wall!";

}