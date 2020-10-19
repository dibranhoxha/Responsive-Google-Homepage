let autoCompleteElement = document.getElementById("auto-complete-container");
let searchBar = document.getElementById("search-bar");


searchBar.addEventListener("click", () => {
    autoCompleteElement.id = "auto-complete";
})

document.querySelector("#submit-buttons").addEventListener("click", () => {
    autoCompleteElement.id = "none";
})

document.getElementById('animated-button').addEventListener('mouseenter', () => {
    let pxArr = [23, 49, 74, 101, 127, 154, 180, 207, 233, 255]
    let randomNr = Math.floor(Math.random() * (pxArr.length-1));
    let px = -pxArr[randomNr];

    setTimeout(() => {
        document.querySelector("#animated-button ul").style.marginTop = px + "px";
    }, 100);
});

document.getElementById('animated-button').addEventListener('mouseleave', () => {
    document.querySelector("#animated-button ul").style.marginTop = "4px";
});







