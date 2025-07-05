const container = document.querySelector("#container");

// Creates <div> element and style for elements affcted by <div>
const content = document.createElement('div');

// Creates <p> element and style for elements affcted by <p>
const para = document.createElement('p');
para.style.color = 'red';

// Creates <h3> element and style for elements affcted by <h3>
const head3 = document.createElement('h3');
head3.style.color = 'blue';

content.classList.add('content');
content.textContent = "This is interesting...";
para.textContent = "Im RED!";
head3.textContent  = "Im a blue h3!!!"

// Classes are appended as a child to the parent element associated to
container.appendChild(content);
container.appendChild(para); // this shows the output in red!
container.appendChild(head3);

// Testing: putting together style/contents of a container
const colorful = document.createElement('div');
const head1 = document.createElement('h1');
const norm_p = document.createElement('p');
colorful.style.background = "pink";
norm_p.textContent = "I'm in a div!";
head1.textContent = "ME TOO!";
// Process of this appends styles/content into a created element. The last append goes into ID selector 
colorful.appendChild(norm_p);
colorful.appendChild(head1);
container.appendChild(colorful);


// This section will create some events
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World!")