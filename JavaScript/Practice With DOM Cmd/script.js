const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is interesting...";

container.appendChild(content);

// Including some code that will add elements 
const para = document.createElement('p');
para.classList.add('para');
para.style.color[red];
para.textContent = "Im RED!";
container.appendChild(para);