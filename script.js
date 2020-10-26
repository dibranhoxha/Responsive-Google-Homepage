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
    let elIndex = getRandomInt(1, (animatedListItems.length - 1));

    // let elementPixels = [49, 74, 101, 127, 154, 180, 207, 233, 255]
    // let randomIndex = Math.floor(Math.random() * (elementPixels.length - 1));
    // let randomPixel = -elementPixels[randomIndex];

    setTimeout(() => {
        animatedList.style.transition = "margin-top 0.9s ease";
        animatedList.style.marginTop = (animatedListItems.offsetTop - animatedListItems[elIndex].offsetTop) + "px";
    }, 300);
}

function fixedSelection() {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0s ease";
        animatedList.style.marginTop = "4px";
    }, 300);
}





/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





