/* =========================================
   PAGE NAVIGATION
========================================= */

const pages =
    document.querySelectorAll(".page");


function showPage(pageID) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document
        .getElementById(pageID)
        .classList.add("active");

}


/* =========================================
   START
========================================= */

function openSurprise() {

    showPage("menu");

}


/* =========================================
   HOME
========================================= */

function goHome() {

    showPage("home");

}


/* =========================================
   MUSIC
========================================= */

const audio =
    document.getElementById("audio");

const vinyl =
    document.getElementById("vinyl");

const playButton =
    document.getElementById("playButton");


function toggleMusic() {

    if (audio.paused) {

        audio.play()

            .then(() => {

                vinyl.classList.add("playing");

                playButton.innerText = "Ⅱ";

            })

            .catch(() => {

                alert(
                    "Please put your music file inside assets/song.mp3"
                );

            });

    }

    else {

        audio.pause();

        vinyl.classList.remove("playing");

        playButton.innerText = "▶";

    }

}


function restartMusic() {

    audio.currentTime = 0;

    audio.play()

        .then(() => {

            vinyl.classList.add("playing");

            playButton.innerText = "Ⅱ";

        })

        .catch(() => {});

}


function stopMusic() {

    audio.pause();

    audio.currentTime = 0;

    vinyl.classList.remove("playing");

    playButton.innerText = "▶";

}


audio.addEventListener(
    "ended",
    () => {

        vinyl.classList.remove("playing");

        playButton.innerText = "▶";

    }
);


/* =========================================
   ENVELOPE
========================================= */

function openEnvelope() {

    const envelope =
        document.getElementById("envelope");


    if (
        envelope.classList.contains("open")
    ) {

        return;

    }


    envelope.classList.add("open");


    setTimeout(() => {

        showPage("letter");

        envelope.classList.remove("open");

    }, 1000);

}


/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");


    heart.className = "heart";


    heart.innerHTML =
        Math.random() > .3
            ? "♥"
            : "✦";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        10 + Math.random() * 20 + "px";


    heart.style.animationDuration =
        6 + Math.random() * 7 + "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


/* Create hearts continuously */

setInterval(
    createHeart,
    400
);


/* Initial hearts */

for (
    let i = 0;
    i < 15;
    i++
) {

    createHeart();

}


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            showPage("menu");

        }

    }
);