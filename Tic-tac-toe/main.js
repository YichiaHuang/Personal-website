const boxs = document.querySelectorAll(".box");
const title = document.querySelector("h1");
const reset = document.querySelector(".reset");
const end = document.querySelector(".message");
const newGame = document.querySelector(".newGame");
let nowTurn = 0;
let counter = 0;
for(let box of boxs){
    box.addEventListener("click",() => {
        nowTurn++;
        counter++;
        if(!box.textContent){    
            if(nowTurn%2 === 0){
                box.textContent = "O";
            }
            else{
                box.textContent = "X";
            }
        }
        const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        if(counter === 9){
            gameOver();
            end.classList.remove('hidden');
            end.textContent = "Game was a Draw";
        }
        for(const i of arr){
            if(boxs[i[0]].textContent === boxs[i[1]].textContent && 
                boxs[i[0]].textContent === boxs[i[2]].textContent){
                    if(boxs[i[0]].textContent === 'O'){
                        gameOver();
                        end.classList.remove('hidden');
                        end.textContent = "Congratulations, Winner is O";
                    }
                    else if(boxs[i[0]].textContent === 'X'){
                        gameOver();
                        end.classList.remove('hidden');
                        end.textContent = "Congratulations, Winner is X";
                    }
                }
        }
    })
}

newGame.addEventListener("click",newgame);
reset.addEventListener("click",newgame);
function gameOver(){
    title.classList.add('hidden');
    reset.classList.add('hidden');
    for(const i of boxs){
        i.classList.add('hidden');
    }
    newGame.classList.remove('hidden');
}

function newgame(){
    counter = 0;
    title.classList.remove('hidden');
    reset.classList.remove('hidden');
    for(const i of boxs){
        i.classList.remove('hidden');
        i.textContent = '';
    }
    nowTurn = 0;
    end.classList.add('hidden');
    newGame.classList.add('hidden');
}

