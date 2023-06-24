
  // Ansh Ansh - 200514694
  // Amitoz Singh - 200513150
  // Harlin Minhas - 200510664
  // Aarzoo Verma - 200520819


/* Variables */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
const speakButton = document.querySelector('button');
let textToSpeak = 'This is the text string that you will generate with your script';
//Array of Phrases
const nouns = ['cat', 'dog', 'bird', 'fish', 'rabbit'];
const verbs = ['jumped', 'ran', 'flew', 'swam', 'hopped'];
const adjectives = ['happy', 'sad', 'big', 'small', 'loud'];
const places = ['park', 'beach', 'mountain', 'forest', 'city'];

/* Functions */
function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

//variables
let story = '';

// Function to pick a random word from an array
function pickRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to concatenate words and update story
function updateStory(word) {
  story += word + ' ';
  document.getElementById('story-text').textContent = story;
}

// Event listeners for phrase buttons
document.getElementById('noun-button').addEventListener('click', function() {
  const randomNoun = pickRandomWord(nouns);
  updateStory(randomNoun);
});

document.getElementById('verb-button').addEventListener('click', function() {
  const randomVerb = pickRandomWord(verbs);
  updateStory(randomVerb);
});

document.getElementById('adjective-button').addEventListener('click', function() {
  const randomAdjective = pickRandomWord(adjectives);
  updateStory(randomAdjective);
});

document.getElementById('place-button').addEventListener('click', function() {
  const randomPlace = pickRandomWord(places);
  updateStory(randomPlace);
});

document.getElementById('generate-button').addEventListener('click', generateRandomStory);

document.getElementById('speak-button').addEventListener('click', function() {
  const textToSpeak = document.getElementById('story-text').textContent;
  speakNow(textToSpeak);
});

document.getElementById('reset-button').addEventListener('click', resetStory);

// Function to generate a random story
function generateRandomStory() {
  story = '';

  const randomNoun = pickRandomWord(nouns);
  const randomVerb = pickRandomWord(verbs);
  const randomAdjective = pickRandomWord(adjectives);
  const randomPlace = pickRandomWord(places);

  updateStory(randomNoun);
  updateStory(randomVerb);
  updateStory(randomAdjective);
  updateStory(randomNoun);
  updateStory(randomPlace);
}

// Function to reset the story
function resetStory() {
  story = '';
  document.getElementById('story-text').textContent = story;
}

// Function to speak the current story
function speakNow() {
  const textToSpeak = story.trim();
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
  } else {
    alert('Speech synthesis is not supported in this browser.');
  }
}