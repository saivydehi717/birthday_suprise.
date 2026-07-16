const typingElement = document.getElementById("typing");

const message = `Dear Cutie ❤️,

Happy Birthday! 🎂

Today is all about celebrating YOU.

I hope your day is filled with happiness,
love, laughter and beautiful memories.

Thank you for always being amazing.

May all your dreams come true.

Stay happy.
Stay healthy.
Keep smiling forever.

🤗 Sending you the biggest virtual hug.

Happy Birthday once again! ❤️`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typingElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = function () {

    typeWriter();

};

function nextPage() {

    window.location.href = "final.html";

}
function goFinal() {
    window.location.href = "final.html";
}