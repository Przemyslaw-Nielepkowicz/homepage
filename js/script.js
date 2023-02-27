let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        themeName.innerText = "Normal";
    }
    else {
        themeName.innerText = "Light";
    }
});
