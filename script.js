


// script.js


document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.0
    audio.play();
    lowerVolume(audio, 0.5, 5000);
    
    const h1Element = document.querySelector("#h1");
    const pElement = document.getElementById("text");
    const h1Text = "Sooo, I have been meaning to ask you something... I told you don't worry about it, i've got it. But first, I have some things i want to say to you.";
    const pText = "...If someone had come up to me a month ago and told me that I would be asking Eesha Rehan this question, I would've laughed in their face because of how unbelievable that would have been. However, so many unbelievable things have happened between us in the last 30 days that I can somewhat believe that this is happening. Every single night we spent talking to each other, every time we held hands, and every risky kiss we stole, hiding from people, and every time we hugged and didn't want to let go of each other. All the motorcycle rides, swerving through traffic and cheating death together (intentionally this time), while you held tight onto me. All the songs we listened to together and they became 'our songs', the early morning car rides. And so much more, that little by little made me fall more in love with a girl that looks like a full moon on a starry sky and makes me feel like a warm sunrise after a really cold night. A girl I have been crushing over for the last 10 years and will be crushing over for the rest of my life. A girl that I am in love with and will always be in love with. Although, I wish this was in person. Eesha, will you be my Valentine?";
    let h1Index = 0;
    let pIndex = 0;
  
  
    function typeH1() {
      h1Element.textContent += h1Text[h1Index];
      h1Index++;
      
      if (h1Index < h1Text.length) {
        setTimeout(typeH1, 75); // Adjust typing speed (milliseconds)
      } else {
        // Add a delay before typing the paragraph content
        setTimeout(typeP, 2000); // Adjust delay time (milliseconds)
      }
  
    }
  
    function lowerVolume(audioElement, targetVolume, duration) {
      const startVolume = audioElement.volume;
      const volumeChange = startVolume - targetVolume;
      const steps = Math.floor(duration / 10); // Split duration into small steps
  
      // Calculate the change in volume for each step
      const volumeDecrement = volumeChange / steps;
  
      // Start the volume reduction loop
      let currentVolume = startVolume;
      let step = 0;
      const interval = setInterval(function() {
          // Decrement the volume
          currentVolume -= volumeDecrement;
          audioElement.volume = currentVolume;
  
          // Increment the step count
          step++;
  
          // Check if the volume reduction is complete
          if (step >= steps) {
              clearInterval(interval);
              audioElement.volume = targetVolume; // Ensure the target volume is set accurately
          }
      }, 10); // Interval of 10 milliseconds for smoother transition
  }
  
  
  function typeP() {
    // Lower the volume before typing the paragraph
    lowerVolume(audio, 0.2, 300); // Lower volume to 0.3 over 1 second (1000 milliseconds)
  
    if (pIndex < pText.length) {
        if (pText[pIndex] === ' ') {
            pElement.textContent += pText[pIndex];
            setTimeout(typeP, 60); // Pause for 90 milliseconds for space character
        } else if (pText[pIndex] === ',' || pText[pIndex] === '.' || pText[pIndex] === '?' || pText[pIndex] === '!' || pText[pIndex] === ';') {
            pElement.textContent += pText[pIndex];
            setTimeout(typeP, 400); // Pause for 400 milliseconds for other punctuation marks
        } else {
            pElement.textContent += pText[pIndex];
            setTimeout(typeP, 50); // Adjust typing speed (milliseconds)
        }
        pIndex++;
    } else {
        // Reset volume to original value once paragraph typing is complete
        lowerVolume(audio, 0.5, 1000); // Raise volume to 0.5 over 1 second (1000 milliseconds)
        // Paragraph text typing complete, show the buttons with a delay
        setTimeout(showButtons, 1000); // Add a delay before showing the buttons
    }
  }
  
    function showButtons() {
      const yesBtn = document.getElementById("yesBtn");
      const noBtn = document.getElementById("noBtn");
      yesBtn.style.opacity = "1"; // Fade in the buttons by setting opacity to 1
      noBtn.style.opacity = "1";
    }
  
    typeH1();
  
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
  
    // Set initial opacity of buttons to 0 for fade-in effect
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
  
    yesBtn.addEventListener("click", function() {
      alert("I would've kissed u in person now but, hey im glad ur my valentine.. <3");
    });
    
    noBtn.addEventListener("click", function() {
      // Redirect to the next page (Question.html)
      window.location.href = "No.html";
    });
  });
  
  const track = document.getElementById("image-track");
  
  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
  
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  
  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }
  
  /* -- Had to add extra lines for touch events -- */
  
  window.onmousedown = e => handleOnDown(e);
  
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  
  window.onmouseup = e => handleOnUp(e);
  
  window.ontouchend = e => handleOnUp(e.touches[0]);
  
  window.onmousemove = e => handleOnMove(e);
  
  window.ontouchmove = e => handleOnMove(e.touches[0]);