// game rules/FUNCTIONS
// 1- player must guess a number between min and max
// 2- player gets certain amount of guesses
// 3- Notify player of guessrs remaining
// 4- Notify the layer of the correct answer if lose
// 5. let the player choose to play again

//Game Values
let min = 1,
    max = 30,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

//assign UI MIN and Max
minNum.textContent = min;
maxNum.textContent = max;

//Function for guessBtn Event Listener
guessNumber = () => {
    let guess = parseInt(guessInput.value);
    //Set Message Function
    setMessage = (msg, color) => {
        message.style.color = color;
        message.textContent = msg;

    }
    //Validation to make sure the input is not empty or less than the minNum or more than the maxNum
    //the isNaN() is an inbuilt JS function used to check is something is a nummber
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }

    //Check if Won
    if(guess === winningNum){
        //disable input if guess === winingNum
        guessInput.disabled = true;
        //change boder
        guessInput.style.borderColor = "green";
        //set won message
        setMessage(`Yay !!! ${winningNum} is correct`, "green");
    } else {
        //lose case
        guessLeft -= 1;
        if(guessLeft === 0 ){
            //game over - lost
        } else {
            //game continue, telling number of guesses lelt
        }
    }

};


//Event Listener for Guess
guessBtn.addEventListener("click", guessNumber);


