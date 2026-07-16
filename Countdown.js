// ===============================
// Birthday Countdown
// ===============================

const countElement = document.getElementById("count");
const messageElement = document.getElementById("message");

let count = 3;

const countdown = setInterval(() => {

    count--;

    if (count > 0) {

        countElement.innerHTML = count;

    } else {

        clearInterval(countdown);

        // Final Message
        countElement.innerHTML = "🎂";

        messageElement.innerHTML =
        "✨ It's Finally Your Special Day ❤️ ✨<br><br>Opening your surprise...";

        // Hide the heading
        document.querySelector("h2").innerHTML =
        "Happy Birthday 🎉";

        // Little celebration
        celebrate();

        // Open Gallery Page
        setTimeout(() => {

            window.location.href = "gallery.html";

        }, 4000);

    }

},1000);


// ===============================
// Emoji Celebration
// ===============================

function celebrate(){

    const emojis = ["🎉","🎊","✨","💖","🎈","❤️"];

    for(let i=0;i<35;i++){

        let emoji = document.createElement("div");

        emoji.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

        emoji.style.position="fixed";

        emoji.style.left=Math.random()*100+"vw";

        emoji.style.top="-50px";

        emoji.style.fontSize=
        (20+Math.random()*25)+"px";

        emoji.style.zIndex="999";

        emoji.style.animation=
        "fall "+(3+Math.random()*2)+"s linear forwards";

        document.body.appendChild(emoji);

        setTimeout(()=>{

            emoji.remove();

        },5000);

    }

}

// Add falling animation dynamically
const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}

}

`;

document.head.appendChild(style);