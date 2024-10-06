let screen = document.getElementById("screen");
let btns = document.querySelectorAll(".key");
let equal = document.getElementById("equal");
let deleteAll = document.getElementById("AC");
let deleteElement = document.getElementById("C");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (screen.textContent === "0" || screen.textContent === "Error!") {
            screen.textContent = "";
        }
        const btnPressed = btn.textContent;
        screen.textContent += btnPressed;
    })
});

equal.addEventListener("click", () => {
    if (screen.textContent.slice(-2) === "/0") {
        screen.textContent = "Error!";
        return;
    }

    try {
        screen.textContent = eval(screen.textContent)
    } catch (error) {
        screen.textContent = "Error!";
    }
});

deleteAll.addEventListener("click", () => {
    screen.textContent = "0";
    return;
});

deleteElement.addEventListener("click", () => {
    screen.textContent = screen.textContent.slice(0, -1) || "0";
    return;
});