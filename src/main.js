// query selector variables go here 👇

// Main Poster Section:
let sectionMainPoster = document.querySelector(".main-poster");
let posterImage = document.querySelector(".poster-img");
let randomTitle = document.querySelector(".poster-title");
let randomQuote = document.querySelector(".poster-quote");
let buttonSavePoster = document.querySelector(".save-poster");
let buttonShowSavedPosters = document.querySelector(".show-saved");
let buttonRandomPoster = document.querySelector(".show-random");
let buttonMakePoster = document.querySelector(".show-form");
let buttonUnmotivationalPosters = document.querySelector(".show-unmotivational");

// Saved Posters Section:
let sectionSavedPosters = document.querySelector(".saved-posters");
let gridSavedPosters = document.querySelector(".saved-posters-grid");
let buttonSavedBackToMain = document.querySelector(".back-to-main");

// Create Posters Section:
let sectionCreatePoster = document.querySelector(".poster-form");
let inputCustomImage = document.querySelector("#poster-image-url");
let inputCustomTitle = document.querySelector("#poster-title");
let inputCustomQuote = document.querySelector("#poster-quote");
let buttonShowMyPoster = document.querySelector(".make-poster");
let buttonNevermind = document.querySelector(".show-main");

// Unmotivational Posters Section:
let sectionUnmotivationalPosters = document.querySelector(".unmotivational-posters");
let gridUnmotivationalPosters = document.querySelector(".unmotivational-posters-grid");
let buttonUnmotivationalBackToMain = document.querySelector(".back-to-main2");



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

var alts = [
  "group of bees landing on a ledge", 
  "bridge at night with a lot of traffic", 
  "close up of a butterfly in the wild",
  "mountain scene with a man standing at the edge of a cliff",
  "group of two elephants in a field",
  "flock of birds mid flight with the sun behind them",
  "close up of a brown fox in a field",
  "close up of a frog with red eyes sitting on a leaf",
  "group of horses trotting down a path next to a paved walkway",
  "lion laying in a field growling, with its mouth open showing its teeth",
  "man standing looking at the range of mountains in front of him",
  "trail surrounded by purple flowers leading to a lake with a pier",
  "two puffins looking at each other surrounded by flowers",
  "pug wrapped in a small blanket laying in bed",
  "man jogging down the side of a road with the sun shining through the clouds",
  "close up of a squirrel laying on a tree branch",
  "close up of a tiger laying on a rock",
  "sea turtle swimming under water"
]

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

// Page Load Events
document.addEventListener('DOMContentLoaded', onPageLoad());

// Main Section Events
buttonSavePoster.addEventListener('click', savePoster);
buttonShowSavedPosters.addEventListener('click', () => {loadSection(sectionSavedPosters, sectionMainPoster)});
buttonRandomPoster.addEventListener('click', createRandomPoster);
buttonMakePoster.addEventListener('click', () => {loadSection(sectionCreatePoster, sectionMainPoster)});
buttonUnmotivationalPosters.addEventListener('click', () => {loadSection(sectionUnmotivationalPosters, sectionMainPoster)});

// Saved Section Events
buttonSavedBackToMain.addEventListener('click', () => {loadSection(sectionMainPoster, sectionSavedPosters)});

// Create Posters Section Events
buttonShowMyPoster.addEventListener('click', loadNewPoster);
buttonNevermind.addEventListener('click', () => {loadSection(sectionMainPoster, sectionCreatePoster)});

// Unmotivational Posters Section Events
gridUnmotivationalPosters.addEventListener('dblclick', deletePoster);
buttonUnmotivationalBackToMain.addEventListener('click', () => {loadSection(sectionMainPoster, sectionUnmotivationalPosters)});


// functions and event handlers go here 👇
// (we've provided two to get you started)!

// getRandomIndex takes a single argument which should be a variable of an array.  It then generates a random number based on the amount of elements in the array.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// createPoster takes three arguments, imageURL, title, quote, and uses them to create an object with properties that represents a poster. It also adds its own properity called id using Date.now
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
};

// onPageLoad calls two functions 1. createRandonPoster to display a random poster on the main section 2. cleanData to clean the unmotivationalPosters array.
function onPageLoad() {
  createRandomPoster();
  cleanData();
};

// createRandomPoster creates three variables imageURL, title, quote, all of which use the getRandomIndex function to pull a random index from the images, titles, and quotes arrays.
// It then assigns the currentPoster variable by calling the createPoster function giving it those three variables as arguments.
// it finally calls the function loadPoster that assigns the random picture, title and quote to the main section to be displayed.
function createRandomPoster() {
  let imageURL = images[getRandomIndex(images)];
  let title = titles[getRandomIndex(titles)];
  let quote = quotes[getRandomIndex(quotes)];
  currentPoster = createPoster(imageURL, title, quote);
  loadPoster();
};

// loadPoster assigns the image src, h1 content, and h3 content for the mainPoster section based on the values of what is currently stored in the currentPoster variable.
function loadPoster() {
  posterImage.src = currentPoster.imageURL;
  posterImage.alt = alts[images.indexOf(currentPoster.imageURL)]
  randomTitle.innerText = currentPoster.title;
  randomQuote.innerText = currentPoster.quote;

};

// loadSection takes in two different arguments, sectionToLoad and sectionToHide. sectionToLoad is toggled to remove its "hidden" class, sectionToHide has the "hidden" class applied.
// if the sectionToLoad is "sectionSavedPosters" it also calls the displaySavedPosters() and if sectionToLoad is "sectionUnmotivationalPosters" it also calls the displayUnmotivationalPosters() function.
function loadSection(sectionToLoad, sectionToHide) {
  if (sectionToLoad === sectionSavedPosters) {
    sectionToLoad.classList.toggle("hidden");
    sectionToHide.classList.add("hidden");
    displaySavedPosters();
  } else if (sectionToLoad === sectionUnmotivationalPosters) {
    sectionToLoad.classList.toggle("hidden");
    sectionToHide.classList.add("hidden");
    displayUnmotivationalPosters();
  } else {
    sectionToLoad.classList.toggle("hidden");
    sectionToHide.classList.add("hidden");
  };
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
// it then reloads the mainPoster section, and calls the loadPoster function to display the new poster.
function loadNewPoster() {
  event.preventDefault();
  currentPoster = createPoster(createPosterImage(), createPosterTitle(), createPosterQuote());
  loadSection(sectionMainPoster, sectionCreatePoster);
  loadPoster();
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
  cleanGrids();
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
  cleanGrids();
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

// cleanGrids simply clears both the saved posters and unmotivational posters div elements and is used as a helper methods when calling the savedPosters Section and unmotivational posters section to prevent duplication.
function cleanGrids() {
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