let autoCompleteElement = document.querySelector("div.auto-complete-container");
let searchBar = document.getElementById("search-bar");
let searchBarContainer = document.querySelector("div.search-bar-container");
let actionContainer = document.getElementById("action-container")
let animatedButton = document.getElementById('animated-button');
let animatedList = document.querySelector("#animated-button ul");
let animatedListItems = document.querySelectorAll("#animated-button > ul > li");
let iphoneInput = document.querySelector('.input-container .iphone-search-input');
let iphonebackward = document.getElementById("iphone-backward");
let desktopBackward = document.getElementById("desktop-backward");


animatedButton.addEventListener('mouseenter', () => {
    randomButtonTextRotation();
});

animatedButton.addEventListener('mouseleave', () => {
    fixedButtonText();
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
    autoCompleteElement.classList.replace("auto-complete-container", "device-auto-complete");
    searchBarContainer.classList.replace("search-bar-container", "auto-complete-search-bar");
    actionContainer.style.display = "none";
    desktopBackward.style.display = "block";
    iphoneInput.focus();
}

function dissapearAutoComplete() {
    autoCompleteElement.classList.replace("device-auto-complete", "auto-complete-container");
    searchBarContainer.classList.replace("auto-complete-search-bar", "search-bar-container");
    actionContainer.style.display = "block";
    desktopBackward.style.display = "none";
}
function randomButtonTextRotation() {
    let randomNumber = Math.floor((Math.random() * (animatedListItems.length - 1) + 1) / 2);
    let randomCase = Math.random() >= 0.5;
    let ul = window.getComputedStyle(animatedList)
    let definedMargin = ul.getPropertyValue('margin-top');
    let number = parseInt(definedMargin.replace(/\D+$/g, ""));
    let elMarginTopPosition = number - (randomNumber * 26);

    if (randomCase) {
        elMarginTopPosition = number + (randomNumber * 26);
    }

    if (elMarginTopPosition !== number) {
        setTimeout(() => {
            animatedList.style.transition = "margin-top 0.5s ease";
            animatedList.style.marginTop = elMarginTopPosition + "px";
        }, 300);
    } else {
        randomButtonTextRotation();
    }

}

function fixedButtonText() {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0s ease";
        animatedList.style.marginTop = "-130px";
    }, 300);
}









