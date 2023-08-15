function calculate() {
    var operation = document.getElementById("inputGroupSelect01").value;
    var num1 = parseFloat(document.getElementById("inputGroupSelect02").value);

    var result;

    switch (operation) {
        case "single":
            result = num1 * 7;
            break;
        case "double":
            result = num1 * 14;
            break;
        case "triple":
            result = num1 * 21;
            break;
        case "deluxe":
            result = num1 * 28;
            break;
        case "executive":
            result = num1 * 35;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML ='Total: ' + result + " Bits";
}