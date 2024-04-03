// Ćwiczenie 1
// 1. Zaimplementuj funkcję zwracającą kwadrat liczby podanej jako parametr.

function squareNumber(number) {
    return number * number;
}
console.log("1.1 (parameter: 5): " + squareNumber(5));

// 2. Utwórz tablicę zawierającą kilka liczb i oblicz kwadraty wszystkich liczb z tablicy wszystkimi poniższymi sposobami:

let numbers = [1, 2, 3, 4, 5];
let result = [];
// a. Pętla for

for (let i = 0; i < numbers.length; i++) {
    result.push(squareNumber(numbers[i]));
}
console.log("1.2.a: " + result);

// b. Pętla for … of

result = [];
for (let number of numbers) {
    result.push(squareNumber(number));
}
console.log("1.2.b: " + result);

// c. Pętla for … in

result = [];
for (let number in numbers) {
    result.push(squareNumber(numbers[number]));
}
console.log("1.2.c: " + result);


// d. Metoda forEach

result = [];
numbers.forEach(function(number) {
    result.push(squareNumber(number));
});
console.log("1.2.d: " + result);

// 3. Zmodyfikuj wariant z metodą forEach zastępując zwykłą funkcję funkcją strzałkową.

result = [];
numbers.forEach(number => result.push(squareNumber(number)));
console.log("1.3: " + result);

// Ćwiczenie 2
// Zaimplementuj funkcję zwracającą sumę liczb podanych jako parametry. 
// - Funkcja powinna akceptować dowolną liczbę parametrów. 
// - W przypadku gdy funkcja będzie wywołana bez parametrów, jej wynikiem powinien być NaN. 
// - Funkcja nie musi być odporna na podanie niepoprawnych parametrów. 
// - Można przyjąć, że wszystkie przekazane parametry są liczbami.

function sumNumbers(...numbers) {
    if (numbers !== undefined && numbers.length > 0) {
        return numbers.reduce((sum, number) => sum + number);
    }
    return NaN;
}

console.log("2. (parameters: 1,2,3,4,5): " + sumNumbers(1, 2, 3, 4, 5));
console.log("2. (no parameter): " + sumNumbers());

// Ćwiczenie 3
// Zaimplementuj funkcję zwracającą na zmianę wartości logiczne true i false. 
// Zadbaj o to aby nie było możliwe ustawienie „ręcznie” wartości zmiennej przechowującej informację o tym jaka wartość ma być przy kolejnym wywołaniu zwrócona.
// Wskazówka: Użyj closure.

const changeValue = (function() {
    var value = true;
    return function() {
        value = !value;
        return value;
    };
}) () ;

console.log("3. 1st call: " + changeValue());
console.log("3. 2nd call: " + changeValue());
