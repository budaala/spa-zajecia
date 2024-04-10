// ćw. 1
// 1. Nie korzystając na razie z konstruktora i prototypu, utwórz obiekt reprezentujący samochód, zawierający atrybuty marka, cena i moc oraz metodę zwiekszMoc (z jednym parametrem do przekazania wartości, o którą ma być zwiększona wartość atrybutu moc). 

var car = {
    brand: 'Audi',
    price: 100000,
    power: 200,
    increasePower: function(value) {
        this.power += value;
    }
}


// 2. Wypisz utworzony obiekt na konsoli korzystając z poniższej instrukcji: console.log(car)
// gdzie “car” to nazwa zmiennej zawierającej referencję do obiektu.

console.log("1.2 ------------------")
console.log(car);


// 3. Zwiększ moc samochodu za pomocą wywołania odpowiedniej metody obiektu.

car.increasePower(50);


// 4. Ponownie wypisz utworzony obiekt na konsoli.

console.log("1.4 ------------------")
console.log(car);

// 5. Utwórz konstruktor Samochod do tworzenia obiektów takich jak utworzony wcześniej ręcznie. Wykorzystaj prototyp do udostępnienia implementacji metody zwiekszMoc obiektom tworzonym utworzonym konstruktorem.

function Car(brand, price, power) {
    this.brand = brand;
    this.price = price;
    this.power = power;
}

Car.prototype.increasePower = function(value) {
    this.power += value;
}

// 6. Utwórz tablicę 3 samochodów (tworząc je przy użyciu konstruktora).

var cars = [
    new Car('BMW', 120000, 250),
    new Car('Mercedes', 150000, 300),
    new Car('Volkswagen', 80000, 150)
]

// 7. Wypisz za pomocą pętli for zawartość tablicy samochodów na konsoli.

console.log("1.7 ------------------")
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 8. Zwiększ moc jednemu z samochodów z tablicy.

cars[1].increasePower(50);

// 9. Ponownie wypisz w pętli zawartość tablicy samochodów na konsoli.

console.log("1.9 ------------------")
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 10. Sprawdź czy możliwe jest uzyskanie tekstowej (string) reprezentacji obiektu samochodu za pomocą wywołania metody toString. Gdzie zawarta jest implementacja wywołanej metody?

console.log("1.10 ------------------")
console.log(cars[0].toString());

// 11. Zdefiniuj w prototypie obiektów tworzonych konstruktorem Samochod metodę toString generującą łańcuch znaków o następującej zawartości: “{marka: Fiat, cena: 45000, moc: 125}”

Car.prototype.toString = function() {
    return "{marka: " + this.brand + ", cena: " + this.price + ", moc: " + this.power + "}";
}

// 12. Sprawdź działanie metody toString na jednym z samochodów.

console.log("1.12 ------------------")
console.log(cars[0].toString());

// Ćwiczenie 2
// 1. Wygeneruj reprezentację JSON dla jednego z obiektów z poprzedniego ćwiczenia. 
// Wyświetl wygenerowaną zawartość JSON na konsoli. Co stało się z metodami obiektu?

console.log("2.1 ------------------")
console.log(JSON.stringify(cars[1]));

// 2. Przygotuj obiekt JSON reprezentujący strukturę obiektu samochodu. Skonwertuj dane JSON do obiektu JavaScript. Wypisz zawartość utworzonego obiektu na konsoli.

var jsonCar = '{"brand": "Opel", "price": 70000, "power": 180}';
var carFromJson = JSON.parse(jsonCar);

console.log("2.2 ------------------");
console.log(carFromJson);