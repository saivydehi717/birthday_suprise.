// ===============================
// Memory Timeline
// ===============================

// ✨ Replace these with your own memories
const memories = [

    "💖 The first time we met was the beginning of beautiful memories.",

    "😊 Your smile can brighten even the darkest day.",

    "🌸 Every photo with you tells a wonderful story.",

    "🎈 Every moment spent together is unforgettable.",

    "✨ Thank you for being such an amazing person.",

    "🎂 And today is your special day... Happy Birthday! ❤️"

];

const memoryBox = document.getElementById("memoryBox");
const progressBar = document.getElementById("progressBar");
const button = document.querySelector("button");

let index = 0;

// Disable button until all memories are shown
button.disabled = true;
button.style.opacity = "0.6";
button.style.cursor = "not-allowed";

function showMemory() {

    // Restart animation
    memoryBox.style.animation = "none";
    memoryBox.offsetHeight; // Reflow
    memoryBox.style.animation = "fadeIn 1s";

    // Display current memory
    memoryBox.innerHTML = memories[index];

    // Update progress bar
    const progress = ((index + 1) / memories.length) * 100;
    progressBar.style.width = progress + "%";

    index++;

    // Show next memory
    if (index < memories.length) {

        setTimeout(showMemory, 3000);

    } else {

        // Enable button
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
        button.innerHTML = "💌 Read Birthday Letter";

    }

}

// Start after page loads
window.onload = function () {

    setTimeout(showMemory, 1000);

};

// Continue button
function nextPage() {

    window.location.href = "letter.html";

}