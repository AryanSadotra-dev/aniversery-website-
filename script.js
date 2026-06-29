/* =====================================
        ELEMENTS
===================================== */

const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");
const chatSection = document.getElementById("chatSection");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

const heartContainer = document.getElementById("heart-container");


/* =====================================
        OPEN ENVELOPE
===================================== */

openBtn.addEventListener("click", () => {

    envelopeSection.style.display = "none";

    letterSection.classList.remove("hidden");

    letterSection.classList.add("fade");

    createConfetti();

});


/* =====================================
        LETTER TO CHAT
===================================== */

nextBtn.addEventListener("click", () => {

    letterSection.style.display = "none";

    chatSection.classList.remove("hidden");

    chatSection.classList.add("fade");

    startChat();

});


/* =====================================
        MUSIC
===================================== */

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "🎵";

    }

});


/* =====================================
        FLOATING HEARTS
===================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heartParticle";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 400);


/* =====================================
        LOVE COUNTER
===================================== */

/* Change your anniversary date */

const loveDate = new Date("2025-06-29 00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter, 1000);

updateCounter();


/* =====================================
        SMALL CONFETTI
===================================== */

function createConfetti() {

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "💕";

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = (15 + Math.random() * 20) + "px";

        confetti.style.transition = "5s linear";

        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = "110vh";

        }, 50);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


/* =====================================
        PLACEHOLDER
===================================== */

function startChat(){

    // Part 2

}

/* =====================================
        WHATSAPP CHAT
===================================== */

const messages = [

    {
        type: "sent",
        text: "Happy Anniversary ❤️"
    },

    {
        type: "received",
        text: "Awww🥺❤️"
    },

    {
        type: "sent",
        text: "Thank you for always staying with me ❤️"
    },

    {
        type: "received",
        text: "Always & Forever ❤️"
    },

    {
        type: "sent",
        text: "You make every day beautiful 🌸"
    },

    {
        type: "received",
        text: "You make my life beautiful too ❤️"
    },

    {
        type: "sent",
        text: "Promise you'll never leave me? 🥺"
    },

    {
        type: "received",
        text: "Never ❤️"
    },

    {
        type: "sent",
        text: "I Love You So Much ❤️"
    },

    {
        type: "received",
        text: "Love You More ❤️🥹"
    },

    {
        type: "sent",
        text: "Happy Anniversary My Love ❤️"
    }

];



let messageIndex = 0;

const chatBox = document.getElementById("chatMessages");



function startChat(){

    showNextMessage();

}



function showNextMessage(){

    if(messageIndex >= messages.length){

        setTimeout(showHero,2000);

        return;

    }

    showTyping();

}



function showTyping(){

    const typing = document.createElement("div");

    typing.className = "typing";

    typing.innerHTML =

    "<span></span><span></span><span></span>";

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(()=>{

        typing.remove();

        displayMessage();

    },1200);

}



function displayMessage(){

    const msg = document.createElement("div");

    msg.className = messages[messageIndex].type;

    msg.innerHTML =

    messages[messageIndex].text +

    "<br><small>12:00 ✔✔</small>";

    chatBox.appendChild(msg);

    chatBox.scrollTop = chatBox.scrollHeight;

    messageIndex++;

    setTimeout(showNextMessage,1800);

}



/* =====================================
        HERO PAGE
===================================== */

const hero = document.getElementById("hero");



function showHero(){

    chatSection.style.display="none";

    hero.classList.remove("hidden");

    hero.classList.add("fade");

    hero.scrollIntoView({

        behavior:"smooth"

    });

}



/* =====================================
      SCROLL ANIMATION
===================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade");

        }

    });

},{
    threshold:.25
});



document.querySelectorAll(

"section"

).forEach(section=>{

    observer.observe(section);

});



/* =====================================
      GALLERY EFFECT
===================================== */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.15)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },400);

    });

});



/* =====================================
      REASON CARD EFFECT
===================================== */

const cards = document.querySelectorAll(".reasonCard");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) rotate(-2deg)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

/* =====================================
        AUTO MUSIC
===================================== */

openBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "🔊";

    }

});



/* =====================================
        RESTART WEBSITE
===================================== */

const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {

    location.reload();

});



/* =====================================
        IMAGE LIGHTBOX
===================================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const preview = document.createElement("img");

preview.style.maxWidth = "90%";
preview.style.maxHeight = "90%";
preview.style.borderRadius = "20px";
preview.style.boxShadow = "0 20px 50px rgba(255,255,255,.2)";

lightbox.appendChild(preview);

document.body.appendChild(lightbox);



galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        preview.src = img.src;

        lightbox.style.display = "flex";

    });

});



lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});



/* =====================================
        MOUSE HEARTS
===================================== */

document.addEventListener("mousemove", e => {

    if (Math.random() > .7) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.fontSize = "20px";

        heart.style.pointerEvents = "none";

        heart.style.transition = "1s linear";

        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.top = (e.clientY - 80) + "px";

            heart.style.opacity = "0";

        }, 10);

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

});



/* =====================================
        FALLING PETALS
===================================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.top = "-50px";

    petal.style.fontSize = (20 + Math.random() * 20) + "px";

    petal.style.transition = "10s linear";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "1";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.style.top = "110vh";

        petal.style.transform = "rotate(360deg)";

    }, 100);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 1200);



/* =====================================
        HERO TEXT ANIMATION
===================================== */

const heroTitle = document.querySelector("#hero h1");

if(heroTitle){

    let scale = 1;

    setInterval(() => {

        scale = scale === 1 ? 1.05 : 1;

        heroTitle.style.transform = `scale(${scale})`;

    }, 1000);

}



/* =====================================
        SMOOTH SECTION REVEAL
===================================== */

const revealElements = document.querySelectorAll(

".flowerCard,.reasonCard,.card,.gallery img,.finalCard"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:.2

});



revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=".8s";

    revealObserver.observe(el);

});



/* =====================================
        END MESSAGE
===================================== */

console.log(

"%c❤️ Happy Anniversary ❤️",

"font-size:30px;color:#ff2d6f;font-weight:bold;"

);

console.log(

"%cMade with Love 💕",

"font-size:18px;color:#ff5c8a;"

);