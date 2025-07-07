let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
const toggleButton = document.getElementById("mode-toggle");

let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", (b) => {
        if (b.target.innerText == "=") {
            string = String(eval(string));
            inputbox.value = string;
        }
        else if (b.target.innerText == 'AC') {
            string = "";
            inputbox.value = string;
        }
        else if (b.target.innerText == 'DEL') {
            string = string.slice(0, -1);
            inputbox.value = string;
        }
        else if (b.target.id == 'plusminus') {
            string = String(-1 * eval(string));
            inputbox.value = string;
        }
        else {
            string += b.target.innerText;
            inputbox.value = string;
        }

    });
});

