function calculate() {
    var operation = document.getElementById("inputGroupSelect01").value;
    var num1 = parseFloat(document.getElementById("inputGroupSelect02").value);

    var result;

    switch (operation) {
        case "single":
            result = num1 * 10;
            break;
        case "double":
            result = num1 - 20;
            break;
        case "triple":
            result = num1 * 30;
            break;
        case "deluxe":
            result = num1 * 40;
            break;
        case "executive":
            result = num1 * 50;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML ='Total: ' + result + " Bits";
}