
function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.className = 'overflow-hidden';
  
    const container = document.createElement('div');
    container.className = 'flex flex-col lg:flex-row justify-center container mx-auto';
  
    const titleDiv = document.createElement('div');
    titleDiv.className = 'flex justify-center text-3xl lg:text-6xl pt-10 mt-10 silkscreen-regular';
    const titleLink = document.createElement('a');
    titleLink.href = 'https://jashandeep.co.uk';
    titleLink.textContent = 'jashandeep.co.uk';
    titleDiv.appendChild(titleLink);
  
    const contentDiv = document.createElement('div');
    contentDiv.style.maxWidth = '1500px';
    contentDiv.className = 'flex justify-end gap-10 w-full p-10';
  
    const contactList = createList('Contact', [
      { href: "/pages/resume/1/", text: "Resume" },
      { href: "https://github.com/jayd719", text: "Github", external: true },
      { href: "https://www.linkedin.com/in/jashansingh65/", text: "Linkedin", external: true },
      { href: "mailto:jsingh0779@gmail.com", text: "Mail" }
    ]);
  
    const pagesList = createList('Pages', [
      { href: "/projects", text: "Projects" },
      { href: "/pages/aboutme/", text: "About Me" },
      { href: "/manufacturing_engineering/", text: "Manufacturing" }
    ]);
  
    contentDiv.appendChild(contactList);
    contentDiv.appendChild(pagesList);
  
    container.appendChild(titleDiv);
    container.appendChild(contentDiv);
    footer.appendChild(container);
  
  
    document.body.appendChild(footer);
  }
  
  
  function createList(title, items) {
    const ul = document.createElement('ul');
    ul.className = 'my-10 text-md';
    ul.textContent = title;
  
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'hover:scale-[1.25] font-bold opacity-25 hover:opacity-100 p-2 hover:bg-base-100 rounded-3xl transition duration-200 flex justify-start px-4 hover:cursor-pointer items-center gap-1 group';
  
      const a = document.createElement('a');
      a.href = item.href;
      a.className = 'flex items-center';
      if (item.external) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
  
      const span = document.createElement('span');
      span.textContent = item.text;
      a.appendChild(span);
  
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('viewBox', '0 0 16 16');
      svg.className = 'group-hover:rotate-[45deg] group-hover:translate-x-3 transition duration-300';
  
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill-rule', 'evenodd');
      path.setAttribute('d', 'M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z');
  
      svg.appendChild(path);
      a.appendChild(svg);
      li.appendChild(a);
      ul.appendChild(li);
      
    });
  
    return ul;
  }


 
  