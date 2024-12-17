function renderNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.className="w-full mb-10 navbar fixed top-0 z-[100] backdrop-blur-xl hover:shadow-base-300 hover:shadow-3xl transition duration-300"
    navbar.innerHTML = `
        <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div> 
        <div class="flex-1 px-2 mx-2">${icon}</div>
        <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-2">
                <!-- Navbar menu content here -->
                ${createNavLink('/', homeSVG, 'Home')}
                ${createNavLink('/about', aboutSVG, 'About')}
                ${createNavLink('/work', workSVG, 'Work')}
                ${createNavLink('/resume.pdf', resumeSVG, 'Resume')}
                ${createNavButton('/contact', contactSVG, 'Contact')}
            </ul>
        </div>
    `;
}

function renderMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.innerHTML = `
        ${createNavLink('/', homeSVG, 'Home')}
        ${createNavLink('/about', aboutSVG, 'About')}
        ${createNavLink('/work', workSVG, 'Work')}
        ${createNavLink('/resume.pdf', resumeSVG, 'Resume')}
        ${createNavLink('/contact', contactSVG, 'Contact')}
    `;
}

function createNavLink(href, icon, text) {
    return `
        <li><a href="${href}" class="flex items-center">
            ${icon}
            <span>${text}</span>
        </a></li>
    `;
}

function createNavButton(href, icon, text) {
    return `
        <li><a onclick="my_modal_2.showModal();" class="${maggicButton1}">
            ${icon}
            ${text}
        </a></li>
    `;
}

function renderHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="hero min-h-screen bg-base-200">
            <div class="p-4">
                ${banner}
            </div>
        </div>
    `;
}

function renderSkills() {
    const skills = document.getElementById('skills');
    skills.innerHTML = `
        <h2 class="text-3xl font-bold mb-4 text-center">Things I Do</h2>
        <p class="text-lg mb-8 text-center">
            My academic pursuits have instilled in me a deep appreciation for the intersection of technology and creativity. I am deeply fascinated by the limitless potential that emerges at this intersection.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${createSkillCard("https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=3000&auto=format&fit=crop", "Big Data", "Analyzing complex datasets to reveal patterns and trends, Enabling data-driven decision-making at scale")}
            ${createSkillCard("https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2971&auto=format&fit=crop", "Computer Vision", "Developing algorithms to interpret visual information, object recognition, image classification, and autonomous navigation")}
            ${createSkillCard("https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?q=80&w=2970&auto=format&fit=crop", "CNC Machining", "Writing code to control computer numerical control (CNC) machines. Combining software and hardware to automate machining tasks.")}
        </div>
    `;
}

function createSkillCard(image, title, description) {
    return `
        <div class="card bg-base-200 shadow-xl">
            <figure><img src="${image}" alt="${title}" class="w-full h-48 object-cover" /></figure>
            <div class="card-body ">
                <h3 class="card-title ">${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
}

function renderTechnologies() {
    const technologies = document.getElementById('technologies');
    technologies.innerHTML = `
        <h2 class="text-3xl font-bold mb-8 text-center">Technologies I'm Skilled In</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${createTechnologyCategory("Programming Languages", programmingLanguages)}
            ${createTechnologyCategory("Web Development", webDevelopment)}
            ${createTechnologyCategory("Operating Systems", operatingSystems)}
            ${createTechnologyCategory("Manufacturing", manufacturing)}
        </div>
    `;
}

function createTechnologyCategory(title, technologies) {
    return `
        <div>
            <h3 class="text-xl font-semibold mb-4">${title}</h3>
            <ul class="menu bg-base-200 w-full rounded-box">
                ${technologies.map(tech => createTechnologyItem(tech)).join('')}
            </ul>
        </div>
    `;
}

function createTechnologyItem(tech) {
    return `
        <li>
            <a class="flex items-center space-x-2">
                <img src="${tech.icon}" alt="${tech.name}" width="24" height="24" />
                <span>${tech.name}</span>
                ${tech.proficiency ? `<span class="badge badge-sm">${tech.proficiency}</span>` : ''}
            </a>
        </li>
    `;
}

const programmingLanguages = [
    { name: 'Python', icon: '/icons/python.png', proficiency: 'Proficient' },
    { name: 'C/C++', icon: '/icons/cpp.png', proficiency: 'Proficient' },
    { name: 'Java', icon: '/icons/java.png', proficiency: 'Proficient' },
    { name: 'R', icon: '/icons/r.png', proficiency: 'Proficient' },
    { name: 'JavaScript', icon: '/icons/javascript.png', proficiency: 'Familiar' },
];

const webDevelopment = [
    { name: 'Django', icon: '/icons/django.png' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
    { name: 'Spring', icon: '/icons/spring.png' },
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.png' },
];

const operatingSystems = [
    { name: 'MacOS', icon: '/icons/macos.png' },
    { name: 'Windows', icon: '/icons/windows.png' },
    { name: 'Linux', icon: '/icons/linux.png' },
];

const manufacturing = [
    { name: 'Solidworks', icon: '/icons/solidworks.png' },
    { name: 'MasterCam', icon: '/icons/mastercam.png' },
    { name: 'GD&T', icon: '/icons/gdt.png' },
];

function renderCallToAction() {
    const callToAction = document.getElementById('callToAction');
    callToAction.className="bg-base-200 py-16 mt-16"
    callToAction.innerHTML = `
        <div class="hero">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h2 class="text-4xl font-bold mb-8">If you like what you see?<br />Let's talk!</h2>
                        <div class="social-links">
                            ${createSocialLink("https://github.com/jayd719", "github")}
                            ${createSocialLink("https://www.linkedin.com/in/jashansingh65/", "linkedin")}
                            ${createSocialLink("mailto:jsingh0779@gmail.com", "mail")}
                        </div>
                </div>
            </div>
        </div>
    `;
}


  


// Define helper function to create social links
function createSocialLink(href, icon) {
    css ="btn mx-2 btn-accent text-center"
    return `
      <a href="${href}" target="_blank" rel="noopener noreferrer" class="${css}">
        <span>${icon}</span>
      </a>
    `;
  }



 function renderFooter() {
    const footer = document.createElement('div');
    footer.className="bg-base-300"
    footer.innerHTML = `
      <div class="footer-credits text-center py-2">
        <p>&copy; 2024 jashandeep.co.uk</p>
      </div>
    `;
    document.body.appendChild(footer)
  }
  
  function renderAbout() {
    const about = document.getElementById('about');
    about.innerHTML = `
        <div class="hero bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src="/placeholder.svg" class="max-w-sm rounded-lg shadow-2xl" alt="JD's profile picture" />
                <div>
                    <h1 class="text-5xl font-bold">About Me</h1>
                    <p class="py-6">I'm a passionate computer science student with a keen interest in software development, data analysis, and machine learning. My journey in tech has equipped me with a diverse skill set and a problem-solving mindset.</p>
                    <p class="py-6">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.</p>
                    <a href="#skills" class="btn btn-accent">Check out my skills</a>
                </div>
            </div>
        </div>
    `;
}


function renderProjects() {
    const projects = document.getElementById('projects');
    projects.className='container py-16 mx-auto'
    projects.innerHTML = `
        <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div class="grid grid-cols-1 gap-3 list-none lg:grid-cols-3 p-5">
            ${createProjectCard("AI-Powered Chess Engine", "Developed a chess engine using machine learning algorithms to predict optimal moves.", "https://github.com/jayd719/chess-engine")}
            ${createProjectCard("E-commerce Platform", "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.", "https://github.com/jayd719/ecommerce-platform","lg:col-span-2")}
            ${createProjectCard("Data Visualization Dashboard", "Created an interactive dashboard for visualizing complex datasets using D3.js and React.", "https://github.com/jayd719/data-viz-dashboard")}
            ${createProjectCard("E-commerce Platform", "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.", "https://github.com/jayd719/ecommerce-platform","lg:row-span-2")}
            ${createProjectCard("Data Visualization Dashboard", "Created an interactive dashboard for visualizing complex datasets using D3.js and React.", "https://github.com/jayd719/data-viz-dashboard")}
            ${createProjectCard("Data Visualization Dashboard", "Created an interactive dashboard for visualizing complex datasets using D3.js and React.", "https://github.com/jayd719/data-viz-dashboard")}
            ${createProjectCard("Data Visualization Dashboard", "Created an interactive dashboard for visualizing complex datasets using D3.js and React.", "https://github.com/jayd719/data-viz-dashboard")}
        </div>
    `;
}

function createProjectCard(title, description, link,span="") {
    return `
        <div class="pop card bg-base-200 shadow-xl ${span}">
            <div class="card-body ">
                <h3 class="card-title  ">${title}</h3>
                <p>${description}</p>
                <div class="card-actions justify-end">
                    <a href="${link}" class="btn btn-sm btn-accent" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    `;
}

function renderEducation() {
    const education = document.getElementById('education');
    education.innerHTML = `
        <h2 class="text-3xl font-bold mb-8 text-center">Education</h2>
        <div class="timeline">
            ${createEducationItem("2022 - Present", "Bachelor of Science in Computer Science", "University of Technology", "Currently maintaining a 3.8 GPA. Relevant coursework includes Data Structures, Algorithms, Database Systems, and Machine Learning.")}
            ${createEducationItem("2020 - 2022", "Associate's Degree in Computer Science", "Community College", "Graduated with honors. Developed a strong foundation in programming fundamentals and mathematics.")}
            ${createEducationItem("2019", "High School Diploma", "Tech High School", "Valedictorian. Participated in numerous coding competitions and hackathons.")}
        </div>
    `;
}

function createEducationItem(date, degree, institution, description) {
    return `
        <div class="timeline-item">
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">${date}</time>
                <div class="text-lg font-black">${degree}</div>
                ${institution}
                <p class="text-sm">${description}</p>
            </div>
            <hr/>
        </div>
    `;
}



function renderBackground() {
    const backgroundDiv = document.getElementById("background");
    backgroundDiv.className = `
    fixed top-0
    pointer-events-none aspect-square w-full h-full 
    opacity-10 blur-3xl 
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
  `;
    document.body.appendChild(backgroundDiv);    
  }


  
function addContactDiv(){
    const di = document.createElement("div")
    di.innerHTML=`<dialog id="my_modal_2" class="modal">
  <div class="modal-box w-11/12 max-w-5xl shadow-3xl">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div class="flex flex-col mx-auto text-center">
      <p class="mt-5 py-5 font-bold text-xl mb-3">I'm always eager to collaborate on exciting projects or discuss opportunities</p>
      <aside class="">
        <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none my-5">
          If you like what you see...<br>
        <span class="text-error font-bold">Let's connect</span>
      </h2>
      </aside> 
      <ul class="menu flex flex-col md:flex-row mx-auto gap-4 w-full justify-center">
          ${createSocialLink("https://github.com/jayd719", "github")}
          ${createSocialLink("https://www.linkedin.com/in/jashansingh65/", "linkedin")}
        ${createSocialLink("mailto:jsingh0779@gmail.com", "mail")}
      </ul>
      <p class="mt-5 py-5 italic font-bold">Thank you for visiting my portfolio! I look forward to connecting with you</p>
    </div>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`

document.body.appendChild(di)
}