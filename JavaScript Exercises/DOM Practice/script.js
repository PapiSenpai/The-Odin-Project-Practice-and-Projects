const output = document.querySelector(".output");
output.textContent = 'output ';

let i = 10;

for(; i >= 0; i--){
  const para = document.createElement('p');
  if(i !== 0)
    para.textContent = `Countdown: ${i};`;
  else{
    para.textContent = `Blastoff!`
  };
  output.appendChild(para);
}

