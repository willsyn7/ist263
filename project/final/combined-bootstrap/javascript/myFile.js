// Get the modal
var modal = document.getElementById("myModal");

// get the leave comments modal button
let modalBtn = document.getElementById("comment-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

modalBtn.addEventListener(
  "click",
  function () {
    // display the modal when user clicks on leave comments button
    modal.style.display = "block";
  },
  false
);

/***************
 *
 *
 *
 * code for the game
 *
 *
 *
 *
 *
 *
 * ***************************** */

//to generate Text
function generateLorem() {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const numberOfSentences = Math.floor(Math.random() * 3) + 1;
  const generatedLorem = Array.from(
    { length: numberOfSentences },
    () => loremText
  ).join(" ");
  document.getElementById("paragraph").innerText = generatedLorem;
  document.getElementById("paragraph").style.textAlign = "justify";
}

// Get the modal
var modalGame = document.getElementById("myModalGame");

// to display wpm value
let display_wpm_value = document.getElementById("counted_words");

// Get the button that opens the modal
var btn = document.getElementById("game");

// Get the <span> element that closes the modal
var spanGame = document.getElementsByClassName("closeGame_")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modalGame.style.display = "block";
  generateLorem();
  display_wpm_value.innerHTML = "Words per minute: 0";
};

// When the user clicks on <span> (x), close the modal
spanGame.onclick = function () {
  modalGame.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalGame.style.display = "none";
  }
};

/************************
 *
 *
 *
 * calculate the number of words per minute
 *
 *
 *
 ********************** */

let start_time = 0;
let end_time = 0;

let input_box = document.getElementById("game_text_input");
let game_submit = document.getElementById("game_submission_btn");

// when user clicks the input box
input_box.onclick = function () {
  // set the start timer
  start_time = new Date();
  display_wpm_value.innerHTML = "Words per minute: 0";
};

// when user submits text
game_submit.onclick = function () {
  // set the end time
  end_time = new Date();

  // get the words typed
  let words = input_box.value;

  // get the difference between end and start time
  let time_difference = end_time.getMinutes() - start_time.getMinutes();

  // get the number of words by spliiting using space
  let number_of_words = words.split(" ").length;

  // find number of minutes in the time difference
  display_wpm_value.innerHTML =
    "Words per minute: " + number_of_words / (time_difference + 1);

  input_box.value = "";
};

// Code for when the accordion header has been clicked
if (document.getElementsByClassName("accordion-header")[0] != null) {
  // get the all the accordion headers
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("accordion-header")) {
      // toggle the next sibling to display or hide, depending on current state
      let sibling = e.target.nextElementSibling;

      if (sibling.classList.contains("display-block")) {
        sibling.classList.remove("display-block");
      } else {
        sibling.classList.add("display-block");
      }
    }
  });
}
