let autoCompleteElement = document.getElementById("auto-complete-container");
let searchBar = document.getElementById("search-bar");
let searchBarContainer = document.getElementById("search-bar-container");
let animatedButton = document.getElementById('animated-button');
let animatedList = document.querySelector("#animated-button ul");
let animatedListItems = document.querySelectorAll("#animated-button ul li");

searchBar.addEventListener("click", () => {
    autoCompleteElement.id = "device-auto-complete";
    searchBarContainer.id =  "auto-complete-search-bar";
    document.getElementById("under-auto-complete").style.display = "none"
})

document.querySelector("#submit-buttons").addEventListener("click", () => {
    // autoCompleteElement.id = "";
    // searchBarContainer.id =  "auto-complete-container";
    // document.getElementById("under-auto-complete").style.display = "block"
})

let pxArr = [49, 74, 101, 127, 154, 180, 207, 233, 255]
let randomNr = Math.floor(Math.random() * (pxArr.length - 1));
let px = -pxArr[randomNr];
animatedButton.addEventListener('mouseenter', () => {
    setTimeout(() => {
        animatedList.style.transition = "margin-top 0.9s ease";
        animatedList.style.marginTop = px + "px";
    }, 300);
});

animatedButton.addEventListener('mouseleave', () => {

    setTimeout(() => {
        animatedList.style.transition = "margin-top 0s ease";
        animatedList.style.marginTop = "4px";
    }, 300);
});







