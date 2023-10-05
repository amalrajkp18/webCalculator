let inputText = document.querySelector(".ouput-text");

// function display buttons when clicked
function display(char) {
    inputText.textContent += char;
}

// clear content
function cls(val) {
    if (val === "C") {
        // clear one character
        var exp = inputText.textContent;
        inputText.textContent = exp.slice(0, -1);
    } else {
        // clear all character
        inputText.textContent = " ";
    }
}

// calcalute
function calculate() {
    var exp = inputText.textContent;

    // Replace 'X' with '*' and '÷' with '/'
    exp = exp.replaceAll("X", "*");
    exp = exp.replaceAll("÷", "/");

    try {
        // Evaluate the expression
        var result = eval(exp);

        if (!isNaN(result)) {
            // Display the result
            inputText.textContent = parseFloat(result).toFixed(2);
        } else {
            console.log("error");
        }
    } catch (error) {
        // Handle any exceptions that occur during evaluation
        console.log("error");
    }
}
