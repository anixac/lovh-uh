const answers_no = {
    english: [
        "No",
        "Are you sure? 😡",
        "Are you really sure??🥺",
        "Are you really🥺 realy sure???",
        "Think 🤬again?",
        "Don't believe in😑 second chances?",
        "Why are you being so 😞 cold?",
        "Maybe we can 💗🫴🏻talk about it?",
        "I am not going to😡 ask again!",
        "Ok now this is 🥺hurting my feelings!",
        "You are now just 🙂being mean!",
        "Why are you 😭doing this to me?",
        "Please give 😭😭me a chance!",
        "I am begging you 🥲🥲to stop!",
        "shut up..? do it again 🤬☺️.."
   
    ],
    hindi: [
        "pls baby",
        "kyun 🥺?",
        "mtt karo aisa 🥺?",
        "lov u yrr 🥺💗?",
        "maan bhi jaaa 💗🥺..",
        "no nhi chalega 🥺💗.",
        "🥺🥺😭😭",
        "😭😭😭",
        "😏😏krte raho",
        "😭😭😹😹",
        "haha",
        "hui hui 🤭🤭😭😭",
        "lob y 😭😹🤭!",
        "teri toh 🤭😹",
        "🤬🤬bahot hogaya firse chalu krr  !"
    ]
};

answers_yes = {
    "english": "Yes 🤭",

    "hindi": "haan 🤭"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "1.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "huh??";
    } else if (language === "hindi") {
        questionHeading.textContent = "do uh love me??";
    } else {
        questionHeading.textContent = "muah babyyyyyyy";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "hindi") {
        successMessage.textContent = "baby";
    } else if (language === "hindi") {
        successMessage.textContent = "baby";
    } else {
        successMessage.textContent = "yayyeee my darling  :3";
    }
}
