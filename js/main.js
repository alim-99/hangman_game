// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = 'letter-box';

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "r", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Messi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];
console.log(randomPropName)

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue)

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");
console.log(lettersGuessContainer.nodeValue)

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === ' ') {

    // Add Class To The Span
    emptySpan.className = 'with-space';

  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);

});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");
console.log(guessSpans);

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  // Set The Choose Status
  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {

      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");

      }

    } else {

      // Play Success Sound
      document.getElementById("success").play();

    }

  }

});

// End Game Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup_fail';

  // Append To The Body
  document.body.appendChild(div);

}


// handle try again button
let btn = document.querySelector(".btn button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  window.location.reload();
})

// Handle Hints 
let hint = document.querySelector(".game-hint");
let theHint = document.querySelector(".game-hint span");

// i will handle each category according to its name
// Programming Category 
if (randomPropName === 'programming') {
  if (randomValueValue === 'javascript') {
    theHint.innerHTML = "The Best Programming Langauge for building websites";
  } else if (randomValueValue === 'php') {
    theHint.innerHTML = "Programming Langauge we use when we want to make the backend for the website";
  } else if (randomValueValue === 'python') {
    theHint.innerHTML = "Programming Langauge that have many uses in data sience and machine learning and more";
  } else if (randomValueValue === 'go') {
    theHint.innerHTML = "Programming Langauge that its name is a verb";
  } else if (randomValueValue === 'r') {
    theHint.innerHTML = "The Most Famous Programming Langauge that has one letter";
  }
}

// Movies Category
if (randomPropName === 'movies') {
  if (randomValueValue === 'Inception' || randomValueValue === 'Prestige' || randomValueValue === 'Interstellar' || randomValueValue === 'Memento') {
    theHint.innerHTML = "a film by cristopher nolan";
  } else if (randomValueValue === 'Parasite') {
    theHint.innerHTML = "a korean film won an oscar";
  } else if (randomValueValue === 'Whiplash') {
    theHint.innerHTML = "an american film that taks about passion";
  } else if (randomValueValue === "Coco" || randomValueValue === "Up") {
    theHint.innerHTML = "an animation film";
  }
}

// People Catgeory
if (randomPropName === "people") {
  if (randomValueValue === "Albert Einstein") {
    theHint.innerHTML = "The Most Famous Sceinetst In The History";
  } else if (randomValueValue === "Hitchcock") {
    theHint.innerHTML = "The Director who invented the dolby zoom";
  } else if (randomValueValue === "Alexander") {
    theHint.innerHTML = "The Most Famous Conqreuer In Ancient Greece";
  } else if (randomValueValue === "Messi") {
    theHint.innerHTML = "The Best Player In The History Of Football";
  } else {
    theHint.innerHTML = "The Most Famous Queen In Anceint Egypt";
  }
}

// Country Category 
if (randomPropName === "countries") {
  if (randomValueValue === "Syria" || randomValueValue === "Yemen" || randomValueValue === "Bahrain") {
    theHint.innerHTML = "A Country From The Middle East";
  } else if (randomValueValue === "Egypt") {
    theHint.innerHTML = "A Country That Have The Most Ancinet History";
  } else if (randomValueValue === "Palestine") {
    theHint.innerHTML = "🍉"
  } else if (randomValueValue === "Qatar") {
    theHint.innerHTML = "The First Country That Hostes The World Cup";
  }
}

