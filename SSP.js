const Mainscreen = document.querySelector(".screen");
const Toggle = document.querySelector(".screenshot");

let isProtected = false;
let screenshotMode = false;

// Alerts
function applyAlert() {
    window.addEventListener("focus", Unblur)
    window.addEventListener("blur", Blur)
    alert("Screenshot Protection: ON");
    alert("You can't use any Screenshot app right now!");
}

function removeAlert() {
    window.addEventListener("blur" , Unblur)
    alert("Screenshot Protection: OFF");
    alert("You can use your screenshot app now!");
}

function Blur(){
        Mainscreen.classList.add("blind");
}

function Unblur(){
    Mainscreen.classList.remove("blind");

}

// Enable protection
function EnablePolicy() {

    screenshotMode = false;

    // Detect PrintScreen
    document.addEventListener("keydown", (e) => {
        if (e.key === "PrintScreen" || (e.ctrlKey && ["c","x","s","p"].includes(e.key.toLowerCase()))) {
            screenshotMode = true;
            e.preventDefault();
        
        }
    });

    // Disable clicks during screenshot mode
    document.addEventListener("click", (e) => {
        if (screenshotMode) {
            e.preventDefault();
            alert("Left click disabled during screenshot mode!");
        }
    });

    document.addEventListener("contextmenu", (e) => {
        if (screenshotMode) {
            e.preventDefault();
            alert("Right click disabled during screenshot mode!");
        }
    });

    // Reset on focus
    window.addEventListener("focus", () => {
        screenshotMode = false;
     
    });

}

// Disable protection
function NoPolicy() {
    screenshotMode = false;
}

// Toggle button
Toggle.addEventListener("click", () => {
    if (!isProtected) {
        applyAlert()
        EnablePolicy();
        isProtected = true
    } else {
        NoPolicy();
        isProtected = false
         removeAlert();
    }
});