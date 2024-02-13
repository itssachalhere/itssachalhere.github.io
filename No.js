document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("NoMusic");
    audio.volume = 0.5; // Adjust the volume (0.0 to 1.0)
    audio.play();
}); // <-- Corrected closing parenthesis
