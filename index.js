// Detection of Button Press

for(let i=0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function (){

    var buttonInnerHTML=this.innerHTML;
    eventResponder(buttonInnerHTML);
    buttonAnimation(i=buttonInnerHTML);
});

}

// Detection of Key Press

document.addEventListener("keydown", function(event){

    eventResponder(event.key);
    buttonAnimation(event.key);
});

// Functions

function eventResponder(key){
  switch (key) {
    case "w":  let tom1= new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;
    case "a":  let tom2= new Audio('sounds/tom-2.mp3');
               tom2.play();
               break;
    case "s":  let tom3= new Audio('sounds/tom-3.mp3');
               tom3.play();
               break;
    case "d":  let tom4= new Audio('sounds/tom-4.mp3');
               tom4.play();
               break;
    case "j":  let snare= new Audio('sounds/snare.mp3');
               snare.play();
               break;
    case "k":  let crash= new Audio('sounds/crash.mp3');
               crash.play();
               break;
    case "l":  let kick= new Audio('sounds/kick-bass.mp3');
               kick.play();
               break;
    default:   console.log(key);

  }
}

function buttonAnimation(currentkey){
  let activeBUtton=document.querySelector("." + currentkey);
  activeBUtton.classList.add("pressed");
  setTimeout(function(){
    activeBUtton.classList.remove("pressed");
  },100);
}
