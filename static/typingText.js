/**
 * Animates text being displayed letter by letter in a specified element.
 *
 * @param {string} text - The text to be displayed.
 * @param {string} elementId - The ID of the HTML element to display the text in.
 * @param {number} typingSpeed - The speed of typing in milliseconds per letter.
 * @param {number} startDelay - The delay before typing starts in milliseconds.
 * @param {number} duration - The total duration for the animation in milliseconds.
 */
function animateTextLetterByLetter(text, elementId, typingSpeed, startDelay, duration) {
  // Initialize variables
  let currentIndex = 0;
  const outputElement = document.getElementById(elementId);
  console.log(outputElement)

  // Apply default styling (optional; can be customized)
  outputElement.className ="mt-4 text-4xl text-zinc-500 dark:text-zinc-400 font-light";

  // Start the animation after a delay
  setTimeout(() => {
    // Create an interval for the typing effect
    const typingInterval = setInterval(() => {
      outputElement.innerText = text.substring(0, currentIndex);
      currentIndex++;

      // Stop the interval when the text is fully displayed
      if (currentIndex > text.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Clear the interval after the defined duration
    setTimeout(() => {
      clearInterval(typingInterval);
    }, duration);
  }, startDelay);
}

// Usage example:
animateTextLetterByLetter(
  "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects",
  "outputObject1",
  20,    // Typing speed: 60ms per letter
  2000,  // Start delay: 1 second
  10000  // Duration: 10 seconds
);
