// query selector variables go here 👇
let sectionMainPoster = document.querySelector(".main-poster");
let sectionCreatePoster = document.querySelector(".poster-form");
let sectionSavedPosters = document.querySelector(".saved-posters");
let sectionUnmotivationalPosters = document.querySelector(".unmotivational-posters");
let gridSavedPosters = document.querySelector(".saved-posters-grid");
let gridUnmotivationalPosters = document.querySelector(".unmotivational-posters-grid");
let posterImage = document.querySelector(".poster-img");
let randomTitle = document.querySelector(".poster-title");
let randomQuote = document.querySelector(".poster-quote");
let buttonRandomPoster = document.querySelector(".show-random");
let buttonMakePoster = document.querySelector(".show-form");
let buttonShowSavedPosters = document.querySelector(".show-saved");
let buttonNevermind = document.querySelector(".show-main");
let buttonBackToMain = document.querySelector(".back-to-main");
let buttonBackToMain2 = document.querySelector(".back-to-main2");
let buttonShowMyPoster = document.querySelector(".make-poster");
let buttonSavePoster = document.querySelector(".save-poster");
let buttonUnmotivationalPosters = document.querySelector(".show-unmotivational");
let inputCustomImage = document.querySelector("#poster-image-url");
let inputCustomTitle = document.querySelector("#poster-title");
let inputCustomQuote = document.querySelector("#poster-quote");


// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];

var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var savedPosters = [];
var currentPoster;

// event listeners go here 👇
document.addEventListener('DOMContentLoaded', loadRandomPoster);
document.addEventListener('DOMContentLoaded', cleanData());

buttonUnmotivationalPosters.addEventListener('click', () => {loadSection(sectionUnmotivationalPosters)});
buttonShowSavedPosters.addEventListener('click', () => {loadSection(sectionSavedPosters)});
buttonMakePoster.addEventListener('click', () => {loadSection(sectionCreatePoster)});
buttonBackToMain2.addEventListener('click', () => {loadSection(sectionMainPoster)});
buttonBackToMain.addEventListener('click', () => {loadSection(sectionMainPoster)});
buttonNevermind.addEventListener('click', () => {loadSection(sectionMainPoster)});

buttonShowMyPoster.addEventListener('click', loadNewPoster);
buttonRandomPoster.addEventListener('click', loadRandomPoster);
buttonSavePoster.addEventListener('click', savePoster);

gridUnmotivationalPosters.addEventListener('dblclick', deletePoster);

// functions and event handlers go here 👇
// (we've provided two to get you started)!

// getRandomIndex takes a single argument which should be a variable of an array.  It then generates a random number based on the amount of elements in the array.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// applyRandomPosterImage assigns the element returned from the getRandomPoster function to the .src attribute of the posterImage variable.
function applyRandomPosterImage() {
  return posterImage.src = images[getRandomIndex(images)];
};

// applyRandomPosterTitle assigns the element returned from the getRandomTitle function to the .innerText attribute of the randomTitle variable.
function applyRandomPosterTitle() {
  return randomTitle.innerText = titles[getRandomIndex(titles)];
};

// applyRandomPosterQuote assigns the element returned from the getRandomQuote function to the .innerText attribute of the randomQuote variable.
function applyRandomPosterQuote() {
  return randomQuote.innerText = quotes[getRandomIndex(quotes)];
};

// loadRandomPoster calls three helper methods applyRandomPosterImage, applyRandomPosterTitle, applyRandomPosterQuote, and is used when the page loads and when the "Show Another Random Poster" button is clicked to randomly generate a new poster.
function loadRandomPoster() {
  currentPoster = createPoster(applyRandomPosterImage(), applyRandomPosterTitle(), applyRandomPosterQuote());
};

// loadSection takes in a single argument, which is the variable name of the query selected section element to be loaded, 
// based on the section that was passed into it, it will remove the "hidden" class from that section and add the hidden class to all other sections.
function loadSection(sectionName) {
  if (sectionName === sectionMainPoster) {
    sectionMainPoster.classList.toggle("hidden");
    sectionCreatePoster.classList.add("hidden");
    sectionSavedPosters.classList.add("hidden");
    sectionUnmotivationalPosters.classList.add("hidden");
  } else if (sectionName === sectionCreatePoster) {
    sectionCreatePoster.classList.toggle("hidden");
    sectionMainPoster.classList.add("hidden");
    sectionSavedPosters.classList.add("hidden");
    sectionUnmotivationalPosters.classList.add("hidden");
  } else if (sectionName === sectionSavedPosters) {
    sectionSavedPosters.classList.toggle("hidden");
    sectionMainPoster.classList.add("hidden");
    sectionCreatePoster.classList.add("hidden");
    sectionUnmotivationalPosters.classList.add("hidden");
    displaySavedPosters();
  } else if (sectionName === sectionUnmotivationalPosters) {
    sectionUnmotivationalPosters.classList.toggle("hidden");
    sectionSavedPosters.classList.add("hidden");
    sectionMainPoster.classList.add("hidden");
    sectionCreatePoster.classList.add("hidden");
    displayUnmotivationalPosters();
  };
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
};

// createPosterImage saves the url provided to a block variable imageURL, adds its value to the images array for further use creating random posters, and returns its value to be used in the loadNewPoster function.
function createPosterImage() {
  let imageURL = inputCustomImage.value;
  images.push(imageURL);
  return imageURL;
};

// createPosterTitle saves the string provided to a block variable title, adds its value to the titles array for further use creating random posters, and returns its value to be used in the loadNewPoster function.
function createPosterTitle() {
  let title = inputCustomTitle.value;
  titles.push(title);
  return title;
};

// createPosterQuote saves the string provided to a block variable quote, adds its value to the quotes array for further use creating random posters, and returns its value to be used in the loadNewPoster function.
function createPosterQuote() {
  let quote = inputCustomQuote.value;
  quotes.push(quote);
  return quote;
};

// loadNewPoster sets the currentPoster to the value of the object returned by the createPoster function, providing it the return values of the createPosterImage, createPosterTitle, createPosterQuote functions.
// it then reloads the mainPoster section, and manually inserts and displays the custom created poster by directly assigning the currentposter object values to the html elements in that section.
function loadNewPoster() {
  event.preventDefault();
  currentPoster = createPoster(createPosterImage(), createPosterTitle(), createPosterQuote());
  loadSection(sectionMainPoster);
  posterImage.src = currentPoster.imageURL;
  randomTitle.innerText = currentPoster.title;
  randomQuote.innerText = currentPoster.quote;
};

// savePoster allows the user to save their custom made posters to the savedPosters array so that they can be displayed in the saved posters section.
// it also confirms that no duplicates of the currentPoster object can be saved in the savedPosters array.  If a duplicate is attempted it displays a message to the user to inform them.
function savePoster() {
  if (savedPosters.includes(currentPoster)) {
    alert("This poster has already been saved.");
  } else {
    savedPosters.push(currentPoster);
    alert(`Your poster titled: "${currentPoster.title}" has been saved.`);
  };
};

// displaySavedPosters clears the grid of the savedPosters section and then uses a forEach to iterate through the savedPosters array to create an article element /mini-posters to be displayed to the user.
// it clears the grid at the begginning to prevent duplicating all the saved posters when going back and forth between the main section and saved poster section.
function displaySavedPosters() {
  clearGrids();
  savedPosters.forEach((poster) => { 
      gridSavedPosters.innerHTML += `
      <article class="mini-poster">
        <img src="${poster.imageURL}" id="${poster.id}">
        <h2>${poster.title}</h2>
        <h4>${poster.quote}</h4>
      </article>
  `;
  });
};

// displayUnmotivationalPosters starts by clearing the grid of the unmotivational posters section and then uses a forEach to iterate through the unmotivationalPosters array to create an article element /mini-poster
// to be displayed to the user. It clears the grid at the begginning to prevent duplicating all the unmotivational posters when going back and forth between the main section and unmotivational posters section.
function displayUnmotivationalPosters() {
  clearGrids();
  let countIndex = 0;
  unmotivationalPosters.forEach((poster) => { 
    gridUnmotivationalPosters.innerHTML += `
      <article class="ump-mini-poster ${countIndex}">
        <img class="${countIndex}" src="${poster.imageURL}" id="${poster.id}">
        <h2 class="${countIndex}">${poster.title}</h1>
        <h4 class="${countIndex}">${poster.quote}</h3>
      </article>
  `;
  countIndex++;
  });
};

// cleanData uses a forEach to iterate through the original unmotivational posters array picking out specific properties from each object img_url, name, and description to feed them through the createPosters function.
// to create new clean objects and stores the new objects at the end of the array.  After its doing iterating it then performs splice of the array to delete all the original dirty objects.
function cleanData() {
  unmotivationalPosters.forEach((poster) => {
    unmotivationalPosters.push(createPoster(`${poster.img_url}`, `${poster.name}`, `${poster.description}`));
  });
  unmotivationalPosters.splice(0, 15);
};

// clearGrids simply clears both the saved posters and unmotivational posters div elements and is used as a helper methods when calling the savedPosters Section and unmotivational posters section to prevent duplication.
function clearGrids() {
  gridSavedPosters.innerHTML = ``;
  gridUnmotivationalPosters.innerHTML = ``;
};

// deletePoster takes in a single argument "event" which is the double click of an element on the unmotivational posters grid, the event.target or the element that was double clicked is assigned to a block variable
// called selectedPoster.  It then removes the selected poster from the unmotivational posters array by calling the selectedposters class list which contains the integer value of the elements index in the array.
// it then reloads the section so that the deleted poster is no longer being displayed.
function deletePoster(event) {
  selectedPoster = event.target;
  unmotivationalPosters.splice(selectedPoster.classList, 1);
  displayUnmotivationalPosters();
};