// // game rules/FUNCTIONS
// // 1- player must guess a number between min and max
// // 2- player gets certain amount of guesses
// // 3- Notify player of guessrs remaining
// // 4- Notify the layer of the correct answer if lose
// // 5. let the player choose to play again

// //Game Values
// let min = 1,
//     max = 30,
//     winningNum = 2,
//     guessesLeft = 5;

// //UI Elements
// const game = document.querySelector("#game"),
//       minNum = document.querySelector(".min-num"),
//       maxNum = document.querySelector(".max-num"),
//       guessBtn = document.querySelector("#guess-btn"),
//       guessInput = document.querySelector("#guess-input"),
//       message = document.querySelector(".message");

// //assign UI MIN and Max
// minNum.textContent = min;
// maxNum.textContent = max;

// playAgain = () => {
//     //play again function to change the submit button to play again
//     //we need to target the game wrapper
//     // if(e.target.className === "play-again"){
//     //     window.location.reload();
//     // }
//     console.log("err");
    
// };

// //Function for guessBtn Event Listener
// guessNumber = () => {
//     let guess = parseInt(guessInput.value);
    
//     //Validation to make sure the input is not empty or less than the minNum or more than the maxNum
//     //the isNaN() is an inbuilt JS function used to check is something is a nummber
//     if (isNaN(guess) || guess < min || guess > max){
//         setMessage(`Please enter a number between ${min} and ${max}`, "red");
//     }

//     //Check if Won
//     if(guess === winningNum){
//         // //disable input if guess === winingNum
//         // guessInput.disabled = true;
//         // //change boder
//         // guessInput.style.borderColor = "green";
//         // //set won message
//         // setMessage(`Yay !!! ${winningNum} is correct`, "green");

//         gameOver(true, `${winningNum} is correct, YOU WIN !!!`)
//         //refactoring to make the code neated thst is why I am doing this instead of using the code above
//     } else {
//         //lose case


//         guessesLeft -= 1;
//         //rducing the number of guesses player has left

//         if(guessesLeft === 0 ){
//             //game over - lost

//             //  //disable input if guess === winingNum
//             // guessInput.disabled = true;
//             // //change boder
//             // guessInput.style.borderColor = "red";
//             // //set won message
//             // setMessage(`Sorry you Lost. The Correct number was ${winningNum}`, "red");

//             gameOver(false, `Sorry you Lost. The Correct number was ${winningNum}`);
//             //same as refctoring the code in the winning cas to make my code neated that is the reason why I am using the game over function so as not to repeat myself
            
//         } else {
//             //game continues answer wrong

//             // change border color
//             guessInput.style.borderColor = "red";

//             // Clear Input
//             guessInput.value = '';

//             //game continues, answer wrong and telling number of guesses lelt
//             setMessage(`${guess} is not correct, ${guessesLeft} guesses left . . . `);

            
//         }
//     }

       

// };

// gameOver = (won, msg) => {
//     //game over function
//     let color;
//     won === true ? color = "green" : color ="red";

//     //disable input if guess === winingNum
//     guessInput.disabled = true;
//     //change boder
//     guessInput.style.borderColor = color;
//     //set text color
//     message.style.color = color;
//     //set won message
//     setMessage(msg);

//     //play again
//     guessBtn.value = 'Play Again';
//     guessBtn.className += 'play-again';
//     // since this class was added after the pages loads to a certain point we use event delegation and target a parent
// }

// //Set Message Function
// setMessage = (msg, color) => {
//     message.style.color = color;
//     message.textContent = msg;
// }



// //Event Listener for Guess
// guessBtn.addEventListener("click", guessNumber);

// //Play Again Event Listener
// game.addEventListener("mousedown", playAgain);



/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // PLay Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
