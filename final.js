// =========================================
// Final Birthday Surprise
// =========================================
function openGift() {

    const gift = document.querySelector(".gift-box");
    const surprise = document.getElementById("surprise");

    // Gift opening animation
    gift.innerHTML = "🎊";
    gift.style.transform = "scale(1.3) rotate(15deg)";
    gift.style.transition = "0.5s";

    setTimeout(() => {

        gift.style.display = "none";
        surprise.style.display = "block";

        launchConfetti();
        launchFireworks();

    }, 800);

}

// =========================================
// Confetti
// =========================================

function launchConfetti() {

    const emojis = [
        "🎉","🎊","✨","💖","❤️","🌸","🌹","🎈"
    ];

    for(let i=0;i<120;i++){

        const item=document.createElement("div");

        item.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        item.style.position="fixed";
        item.style.left=Math.random()*100+"vw";
        item.style.top="-40px";
        item.style.fontSize=(18+Math.random()*25)+"px";
        item.style.pointerEvents="none";
        item.style.zIndex="9999";
        item.style.animation=`fall ${3+Math.random()*3}s linear forwards`;

        document.body.appendChild(item);

        setTimeout(()=>{
            item.remove();
        },7000);

    }

}

// =========================================
// Fireworks
// =========================================

function launchFireworks(){

    for(let i=0;i<8;i++){

        setTimeout(()=>{
            createFirework();
        },i*700);

    }

}

function createFirework(){

    const colors=[
        "#ff4f91",
        "#ffd700",
        "#00ffff",
        "#ffffff",
        "#00ff99",
        "#ff6600"
    ];

    const x=Math.random()*window.innerWidth;
    const y=Math.random()*(window.innerHeight/2);

    for(let i=0;i<35;i++){

        const particle=document.createElement("div");

        particle.style.position="fixed";
        particle.style.left=x+"px";
        particle.style.top=y+"px";
        particle.style.width="8px";
        particle.style.height="8px";
        particle.style.borderRadius="50%";
        particle.style.background=colors[Math.floor(Math.random()*colors.length)];
        particle.style.pointerEvents="none";
        particle.style.zIndex="9999";

        const angle=(Math.PI*2*i)/35;
        const distance=60+Math.random()*80;

        particle.animate([
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px)`,
                opacity:0
            }
        ],{
            duration:1400,
            easing:"ease-out"
        });

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },1500);

    }

}

// =========================================
// Falling Animation
// =========================================

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-60px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);

// =========================================
// Replay Journey
// =========================================

function restart(){

    window.location.href="index.html";

}