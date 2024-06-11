document.addEventListener("DOMContentLoaded", function() {
    const display = document.calculator.display;
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;
            
            if (value === "c") {
                display.value = "";
            } else if (value === "=") {
                display.value = eval(display.value);
            } else {
                display.value += value;
            }
        });
    });
});
