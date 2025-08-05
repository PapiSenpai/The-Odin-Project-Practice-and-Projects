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

// using an event listner that selects all containers
// This though is a node list. Similar to an array
const buttons = document.querySelectorAll("button");


// Event Listeners
btn.addEventListener("click", alertFunc); // need this if I want to create a call back in the format of function(e)

// can change event back to e
btn.addEventListener("click", function(e){
    console.log(e);
    // debugger;
    console.log(e.target);
    e.target.style.background = "blue";  // changes the button to blue when pressed
});

buttons.forEach((button) => {
    // .foreach is used to iterate through each element
    buttons.forEach((button) => {
        alert(button.id)
    }); 
});


// Fucntion list
// Event Function Test 
function alertFunc(){
    alert("Clicked!"); 
}
