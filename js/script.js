const myNavbar = document.querySelector(".navbar");
const myBtns = document.querySelectorAll(".btn");
// console.log(myBtns);

myBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
    const btnColor = elem.getAttribute("data-color");
    myNavbar.style.background = btnColor;
    })
});