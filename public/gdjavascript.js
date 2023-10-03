const coinButton = document.getElementById("coinButton");
const counter = document.getElementById("counter");
let count = 0;

coinButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});
