document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("bgMusic");
  audio.volume = 0.00; // Adjust the volume (0.0 to 1.0)
  audio.play();
  
  const h1Element = document.querySelector("#h1");
  const h1Text = "Hi Eesha, I brought you flowers..";
  let h1Index = 0;

  function typeH1() {
    h1Element.textContent += h1Text[h1Index];
    h1Index++;
    
    if (h1Index < h1Text.length) {
      // If the current character is a comma, add a delay
      if (h1Text[h1Index - 1] === ',') {
        setTimeout(typeH1, 750); // Adjust delay time as needed
      } else {
        setTimeout(typeH1, 75); // Adjust typing speed for other characters (milliseconds)
      }
    } else {
      // After typing the heading, fade in the image
      setTimeout(fadeInImage, 700);
    }
  }
  // Function to add fade-in class to the container div
  function fadeInImage() {
    document.getElementById("FlowersContainer").classList.add("fade-in");
    // After fading in the image, show the "Next" button
    setTimeout(showNextButtons, 4000); // Adjust delay time as needed
  }

  function showNextButtons() {
    const NextBtn = document.getElementById("Next");
    NextBtn.style.opacity = "1"; // Fade in the buttons by setting opacity to 1
  }

  typeH1();

  const NextBtn = document.getElementById("Next");

  // Set initial opacity of buttons to 0 for fade-in effect
  NextBtn.style.opacity = "0";
  // Add event listener to the Next button


  NextBtn.addEventListener("click", function() {
    // Redirect to the next page (Question.html)
    window.location.href = "Question.html";
  });
});
