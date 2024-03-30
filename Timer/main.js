let ID;
const stop_press = document.querySelector(".stop");
const reset1_press = document.querySelector(".reset1");
const reset2_press = document.querySelector(".reset2");
function counter() {
    if(!ID){
        ID = setInterval(plus,1000);
    }
    reset1_press.classList.add('hidden');
    reset2_press.classList.remove('hidden');
    stop_press.classList.remove('hidden');
    start_press.classList.add('hidden');
}
function stoptime(){
    clearInterval(ID);
    ID = null;
    stop_press.classList.add('hidden');
    start_press.classList.remove('hidden');
}
function reset_time(){
    clearInterval(ID);
    timer.textContent = "00:00:00";
    second_now = 0;
    stop_press.classList.add('hidden');
    start_press.classList.remove('hidden');
}
let second_now = 0;
let second = 0;
let minute = 0;
let hour = 0;
const timer = document.querySelector(".time");
const start_press = document.querySelector(".start");
function plus(){
    second_now++;
    hour = String(Math.floor(second_now/3600));
    minute = String(Math.floor((second_now-hour*3600)/60));
    second = String(second_now%60);
    timer.textContent = `${hour.padStart(2,0)}:${minute.padStart(2,0)}:${second.padStart(2,0)}`;
}

start_press.addEventListener("click",counter);
stop_press.addEventListener("click",stoptime);
reset2_press.addEventListener("click",reset_time);