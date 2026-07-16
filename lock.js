// ================================
// Secret Birthday Surprise Lock
// ================================

// Change this to your own secret password
const correctPassword = "1707";

function checkPassword() {

    const input = document.getElementById("password").value;
    const container = document.querySelector(".container");
    const error = document.getElementById("error");

    // Correct Password
    if (input === correctPassword) {

        error.style.color = "#90EE90";
        error.innerHTML = "🔓 Access Granted... Opening your surprise ❤️";

        // Small delay before opening next page
        setTimeout(() => {
            window.location.href = "cat.html";
        }, 1800);

    }

    // Wrong Password
    else {

        error.style.color = "#ffb3b3";
        error.innerHTML = "❌ Wrong Passcode! Try Again.";

        // Shake animation
        container.classList.add("shake");

        setTimeout(() => {
            container.classList.remove("shake");
        }, 500);

        // Clear input
        document.getElementById("password").value = "";

    }

}

// Press Enter to Unlock
document.getElementById("password").addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        checkPassword();
    }

});