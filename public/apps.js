let screen = document.getElementById("screen");
let btns = document.querySelectorAll(".key");
let equal = document.getElementById("equal");
let ac = document.getElementById("AC");
let c = document.getElementById("C");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (screen.textContent === "0" || screen.textContent === "Error!") {
            screen.textContent = "";
        }
        const btnPressed = btn.textContent;
        screen.textContent += btnPressed;

        equal.addEventListener("click", () => {
            if (screen.textContent.slice(-2) === "/0") {
                screen.textContent = "Error!";
            }
            try {
                screen.textContent = eval(screen.textContent)
            } catch (error) {
                screen.textContent = "Error!";
            }
        });
        
        ac.addEventListener("click", () => {
            screen.textContent = "0";
        });

        c.addEventListener("click", () => {
            screen.textContent = screen.textContent.substring(0, screen.textContent -1);
            console.log(screen.textContent.substring(0, screen.textContent -1));
        });
    })
});