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
  outputElement.className ="py-6 text-3xl font-bold font-base-100";

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

