const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const buttons = document.getElementsByClassName('buttons')[0];
const presentation = document.getElementById('presentation');
const slideText = document.getElementById('slide-text');
const banner = document.getElementById('banner');

let i = 1;
let size = 50;
let clicks = 0;

/* NO button logic (unchanged funny behavior) */
no_button.addEventListener('click', () => {
    if (clicks === 0) {
        banner.src = "public/no.gif";
        refreshBanner();
    }

    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    if (i < answers_no.length - 1) {
        no_button.innerText = answers_no[i];
        i++;
    } else {
        alert(answers_no[i]);
        i = 1;
        no_button.innerText = answers_no[0];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

/* YES button → Romantic presentation */
const slides = [
    "Yayyy 🥰",
    "I knew you’d say YES 💖",
    "You make my world brighter ✨",
    "Every moment feels special with you 😘",
    "Happy Valentine’s Day ❤️"
];

let slideIndex = 0;

yes_button.addEventListener('click', () => {
    banner.src = "public/yes.gif";
    refreshBanner();

    buttons.style.display = "none";
    presentation.style.display = "block";

    showSlides();
});

function showSlides() {
    if (slideIndex < slides.length) {
        slideText.innerText = slides[slideIndex];
        slideIndex++;
        setTimeout(showSlides, 2000);
    }
}

function refreshBanner() {
    const src = banner.src;
    banner.src = '';
    banner.src = src;
}
