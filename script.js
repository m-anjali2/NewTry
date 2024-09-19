// Array of funny compliments
const compliments = [
    "You're like sunshine on a rainy day!",
    "If you were a vegetable, you'd be a cute-cumber!",
    "You're the reason I smile while staring at my phone!",
    "Your sense of humor could make a rock laugh!",
    "You're cooler than the other side of the pillow!",
    "If you were a fruit, you'd be a fine-apple!",
    "You make the internet a better place!"
  ];
  
  // Function to generate a random compliment
  function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    const complimentElement = document.getElementById('compliment');
  
    // Reset the opacity for fade-in effect
    complimentElement.style.opacity = 0;
    setTimeout(() => {
      complimentElement.textContent = compliment;
      complimentElement.style.opacity = 1;
    }, 100);
  }
  
  // Event listener for button click
  document.getElementById('generate-btn').addEventListener('click', generateCompliment);
  