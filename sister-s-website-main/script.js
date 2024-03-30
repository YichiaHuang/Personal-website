

//type writer effect

var strings=["Technology", "Sport", "Art"];
var i=0;
var speed=50;

function typewriter(){
    if(i<strings.length){
        document.getElementById("subtitle").innerHTML+=strings[i];
        i++;
        setTimeout(typewriter, speed);
    }
}
typewriter();


