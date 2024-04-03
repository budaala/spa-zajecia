

function factorialLoop () {
    var input = document.getElementById("factorialInput").value;
    var output = document.getElementById("factorialOutput");
    var factorial = 1;

    if (input < 0) {
        output.value = "Nieprawidłowa liczba!";
        return;
    }
    
    input = Math.floor(input);
    
    if (input == 0 || input == 1) {
        output.value = 1;
    }
    else {
        for (var i=2; i <= input; i++) {
            factorial = factorial * i;
        }
        output.value = factorial;
    }
}

function factorialRecurrence () {
    var input = document.getElementById("factorialInput").value;
    var output = document.getElementById("factorialOutput");

    if (input < 0) {
        output.value = "Nieprawidłowa liczba!";
        return;
    }
    
    input = Math.floor(input);

    output.value = fRecurrence(input);

}

function fRecurrence (n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fRecurrence(n-1);
    }
}