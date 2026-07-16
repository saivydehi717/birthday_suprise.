// ===============================
// Cat Surprise Page
// ===============================

// YES button function
function openSurprise() {

    // Change the heading
    document.querySelector("h1").innerHTML = "Yay!! 🎉";

    // Change the question text
    document.querySelector(".question").innerHTML =
        "Get ready for your birthday surprise... ❤️";

    // Disable buttons
    document.getElementById("yesBtn").disabled = true;
    document.getElementById("noBtn").disabled = true;

    // Open countdown page after 2 seconds
    setTimeout(() => {

        window.location.href = "countdown.html";

    }, 2000);

}

// ===============================
// NO Button Runs Away
// ===============================

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);

function moveButton() {

    // Screen size
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    // Random position
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move button
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

// ===============================
// Small Cat Message
// ===============================

const messages = [

    "🐱 Meow... Press YES ❤️",

    "😸 Come on... Don't be shy!",

    "🎁 A surprise is waiting!",

    "💖 Just click YES!",

    "🥹 Please...? 🙈"

];

let i = 0;

setInterval(() => {

    document.querySelector(".small").innerHTML = messages[i];

    i++;

    if(i >= messages.length){

        i = 0;

    }

},2000);