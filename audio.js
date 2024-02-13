// audio.js

// Get the audio element
const audio = document.getElementById("bgMusic");

// Function to play the audio
function playAudio() {
  audio.play();
}

// Function to pause the audio
function pauseAudio() {
  audio.pause();
}

// Function to check if the audio is currently playing
function isAudioPlaying() {
  return !audio.paused;
}

// Save the audio state to sessionStorage
function saveAudioState() {
  sessionStorage.setItem("audioState", isAudioPlaying() ? "playing" : "paused");
}

// Load the audio state from sessionStorage and resume playback if necessary
function loadAudioState() {
  const audioState = sessionStorage.getItem("audioState");
  if (audioState === "playing") {
    playAudio();
  }
}

// Add event listener to save audio state when the page is unloaded
window.addEventListener("beforeunload", saveAudioState);

// Load audio state when the page loads
loadAudioState();
