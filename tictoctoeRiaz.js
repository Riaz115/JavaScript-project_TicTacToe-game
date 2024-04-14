// access all elements here
let winerpart = document.querySelector(".winerpart");
let cmntfrwnr = document.querySelector(".cmntfrwnr");
let newgamebtn = document.querySelector(".newgamebtn");
let gamebox = document.querySelector(".gamebox");
let buttonsbox = document.querySelector(".buttonsbox");
let buttons = document.querySelectorAll(".button");
let resetbtn = document.querySelector(".resetbtn");

// Now start code for the game

let firstplayer = true;
// this is a variable to store wining patters
let winpatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

// now we will write text into the Gamebuttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstplayer) {
      button.innerText = "X";
      button.style.color = "red";
      firstplayer = false;
    } else {
      button.innerText = "O";
      button.style.color = "black";
      firstplayer = true;
    }
    button.disabled = true;
    checkwin();
  });
});

// this is checkwin function for checking of wining points
//...

let showwinner = (winner) => {
  if (winner) {
    cmntfrwnr.innerText = `${winner} is the winner of the game`;
  } else {
    cmntfrwnr.innerText = "It's a draw! No one wins.";
  }
  winerpart.classList.remove("hide");
};

let checkwin = () => {
  let draw = true; // Variable to check if it's a draw
  for (let pattern of winpatterns) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        showwinner(val1);
        disabledbtns();
        draw = false; // There's a winner, so it's not a draw
      }
    } else {
      draw = false; // At least one button is not filled, so it's not a draw
    }
  }

  // If it's a draw, show the draw message
  if (draw) {
    showwinner(null);
  }
};

// this is buttons disabled function

let disabledbtns = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};
// this is enabledbuttons function
let enabledbtns = () => {
  for (let button of buttons) {
    button.disabled = false;
    winerpart.classList.add("hide");
    button.innerText = "";
  }
};
// this is for the reset game and new game function

let forrestartandnewgame = () => {
  enabledbtns();
  firstplayer = true;
};

// now addeventlistenter for the new game and reset button
newgamebtn.addEventListener("click", forrestartandnewgame);
resetbtn.addEventListener("click", forrestartandnewgame);
