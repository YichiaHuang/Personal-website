const keys = document.querySelectorAll(".key");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

for(const key of keys){
  const value = key.dataset.key
  key.addEventListener("click",() =>{
    if(key.textContent === 'AC'){
      input.textContent = '';
      output.textContent = '';
    }
    else if(key.textContent === '='){
      output.textContent = eval(input.textContent);
    }
    else if(key.textContent === '<'){
      input.textContent = input.textContent.slice(0,-1);
    }
    else{
      input.textContent = `${input.textContent}${value}`;
    }
  })
}