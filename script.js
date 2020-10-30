let autoCompleteElement = document.getElementById("auto-complete-container");
let searchBar = document.getElementById("search-bar");
let searchBarContainer = document.getElementById("search-bar-container");
let actionContainer = document.getElementById("action-container")
let animatedButton = document.getElementById('animated-button');
let animatedList = document.querySelector("#animated-button ul");
let animatedListItems = document.querySelectorAll("#animated-button > ul > li");
let iphoneInput = document.querySelector('.input-container .iphone-search-input');
let iphonebackward = document.getElementById("iphone-backward");
let desktopBackward = document.getElementById("desktop-backward");


animatedButton.addEventListener('mouseenter', () => {
    randomSelection();
});

animatedButton.addEventListener('mouseleave', () => {
    fixedSelection();
});

searchBar.addEventListener("click", () => {
    appearAutoComplete();
});

iphonebackward.addEventListener("click", () => {
    dissapearAutoComplete();
});

desktopBackward.addEventListener("click", () => {
    dissapearAutoComplete();
});


function appearAutoComplete() {
    autoCompleteElement.id = "device-auto-complete";
    searchBarContainer.id = "auto-complete-search-bar";
    actionContainer.style.display = "none";
    desktopBackward.style.display = "block";
    iphoneInput.focus();
}

function dissapearAutoComplete() {
    autoCompleteElement.id = "auto-complete-container";
    searchBarContainer.id = "search-bar-container";
    actionContainer.style.display = "block";
    desktopBackward.style.display = "none";
}
function randomSelection() {
    let randomNumber = Math.floor((Math.random() * (animatedListItems.length - 1) + 1) / 2);
    let randomCase = Math.random() >= 0.5;
    let ul = window.getComputedStyle(animatedList)
    let definedMargin = ul.getPropertyValue('margin-top');
    let number = parseInt(definedMargin.replace(/\D+$/g, ""));
    let Pixels;
    if (randomCase) {
        Pixels = number + (randomNumber * 26);
    } else {
        Pixels = number - (randomNumber * 26);
    }

    if (Pixels !== number) {
        setTimeout(() => {
            animatedList.style.transition = "margin-top 0.5s ease";
            animatedList.style.marginTop = Pixels + "px";
        }, 300);
    } else {
        randomSelection();
    }

}

function fixedSelection() {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0s ease";
        animatedList.style.marginTop = "-130px";
    }, 300);
}









