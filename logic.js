// global variables

// arrays and vars for holding data
var wordOptions = ["jeremiah", "neena", "darion"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ _ _
var wrongLetters = [];
var numGuesses = 0;

// game counter vars
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//===============================
// functions (resuable blocks of code)

// start game fxn
function startGame() {
    selectedWord = wordOptions[Math.foor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // populate blanks and successes with right num blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    // change html to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //testing/debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}

function checkLetters(letter) {
    // check if letter exists anywhere in the word
    var isLettersinWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLettersinWord == true;
            alert("letter found!");
        }
    }
    // check where in the word the letter exists and populate blanksAndSpaces array
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] == letter;
        }
        // letter not found 
        else {
            wrongLetters.push(letter);
            numGuesses++;
        }
    }

}

function roundComplete(){
    console.log("WIn count "+ winCount + "loss count "+ lossCount + "guesses left " + guessesLeft);

    if( lettersinWord.toString()== blanksAndSuccesses.toString()){
        winCount++;
        alert('you won!');
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    } else if (numGuesses == 0){
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
}


//===============================
// main process: 
// call upon the fxns to make things happen 

// call function (initiates the code for the first time)
startGame();

// register keyclick events 
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(letterGuessed);
}
roundComplete();

//===============================


