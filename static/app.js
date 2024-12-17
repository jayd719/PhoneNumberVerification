document.addEventListener('DOMContentLoaded', () => {
  renderBackground()
  renderNavbar();
  renderMobileMenu();
  renderHero();
  renderSkills();
  renderTechnologies();
  renderProjects();
  // renderCallToAction();
  createFooter()
  renderFooter()
  addContactDiv()

});


setTimeout(function () {
  addInterSectionObserver()
  // Usage example:
  animateTextLetterByLetter(
    "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects",
    "outputObject1",
    40,    // Typing speed: 60ms per letter
    1000,  // Start delay: 1 second
    10000  // Duration: 10 seconds
  );

  console.log("THIS IS");
}, 10);



