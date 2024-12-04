function generateIndex(containerId = "index") {
    // Get all heading tags (h1 to h6)
    const headings = document.querySelectorAll("h2,h3, h4, h5, h6");
    if (!headings.length) {
        console.warn("No headings found in the document.");
        return;
    }

    // Create the container for the index
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement("div");
        container.id = containerId;
        document.body.insertBefore(container, document.body.firstChild);
    }
    container.innerHTML = "<h2>Table of Contents</h2>";

    const indexList = document.createElement("ul");
    indexList.style.padding=0
    indexList.style.listStyle="none"
    container.appendChild(indexList);

    headings.forEach(heading => {
        const level = parseInt(heading.tagName[1]); 
        const listItem = document.createElement("li");
        
        if (!heading.id) {
            heading.id = `91oz.-${Math.random().toString(36).substr(2, 9)}`;
        }
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        listItem.appendChild(link);
        listItem.style.marginLeft = `${(level - 1) * 20}px`;

        indexList.appendChild(listItem);
    });
}
generateIndex();


function insertSVG(id,svg){    
    document.getElementById(id).innerHTML=svg    
}

let id = "diagram1"
let id2 = "diagram2"

insertSVG(id,svg7)
insertSVG(id2,svg)
insertSVG("diagram3",svg8)
insertSVG("diagram4",svg6)
insertSVG("diagram5",svg5)