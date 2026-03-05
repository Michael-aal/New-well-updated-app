const screen = document.querySelector(".screen")
const toggle = document.querySelector(".screenshare")
isprotected = false;

function activation(){

function onHidden() {
  console.log("Capture detected / focus lost");
  screen.classList.add("blind");
}


// Detect window focus loss
window.addEventListener("blur", onHidden);
window.addEventListener("focus", onVisible);

}

function onVisible() {
  console.log("Focus restored");
  screen.classList.remove("blind");
  // Undetect window focus loss

}

function Disactivation(){
    window.addEventListener("blur", onVisible);

}

toggle.addEventListener("click", () =>{
    if (!isprotected){
      activation()
      alert("SCREENSHARE : ON")
      isprotected = true

    }

    else{
       onVisible();
       Disactivation();
       alert("SCREENSHARE: OFF")
       isprotected = false

    }
})