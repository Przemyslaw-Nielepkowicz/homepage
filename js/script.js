{
    const welcome = () => {
    console.log("Hello World");
    }

const toogleBackground = () => { 
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");
    
    body.classList.toggle("light");
    themeName.innerText = body.classList.contains("light") ? "Normal" : "Light";

};

const init = () => {
const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

changeBackgroundButton.addEventListener("click", toogleBackground);
};
welcome();
init();
}