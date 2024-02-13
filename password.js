// password.js
document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
  
    passwordForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      const enteredPassword = passwordInput.value.trim();
      const correctPassword = "011424"; // Replace with your actual password
  
      if (enteredPassword === correctPassword) {
        // Redirect to main content page or trigger playback of the song
        window.location.href = "flowers.html"; // Redirect to main content page
      } else {
        // Display error message or provide visual feedback
        alert("Why do u not remember? </3");
      }
    });

    const hintButton = document.getElementById("hintButton");
    hintButton.addEventListener("click", function() {
      // Show a prompt with the hint message
      alert("The First Kiss"); 
    });
});
