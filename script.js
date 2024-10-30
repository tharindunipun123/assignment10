function display(value) {
    document.getElementById("field").value += value;
}

function clearField() {
    document.getElementById("field").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("field").value);
        document.getElementById("field").value = result;
    } catch (error) {
        document.getElementById("field").value = "Error";
    }
}