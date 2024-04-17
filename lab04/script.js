// Ćwiczenie 1
// 1. Zdefiniuj klasę Osoba do reprezentacji osób posiadających imię i wiek. 
// Zdefiniuj w klasie odpowiedni konstruktor 2-argumentowy oraz metodę przedstaw() zwracającą tekstową reprezentację zawartości obiektu np. w formacie „Jestem Marek, mam 25 lat”.

class Osoba {
    constructor(imie, wiek) {
        this.imie = imie;
        this.wiek = wiek;
    }
    przedstaw() {
        return `Jestem ${this.imie}, mam ${this.wiek} lat`;
    }
}

// Ćwiczenie 3
// 1. Zmień implementację klasy Osoba tak aby imię i wiek były obsługiwane przez settery i gettery.

class Osoba {
    constructor(imie, wiek) {
        this._imie = imie;
        this._wiek = wiek;
    }
    get imie() {
        return this._imie;
    }
    set imie(value) {
        this._imie = value;
    }
    get wiek() {
        return this._wiek;
    }
    set wiek(value) {
        this._wiek = value;
    }
    przedstaw() {
        return `Jestem ${this.imie}, mam ${this.wiek} lat`;
    }
}

// 2. Upewnij się że po modyfikacji klasy Osoba tworzenie, modyfikowanie i wyświetlanie obiektu klasy Pracownik dalej działa poprawnie.

// Ćwiczenie 4
// 1. Zmień setter dla imienia w klasie Osoba tak aby imię było zawsze zapisywane w obiekcie w formacie: pierwsza litera wielka, a pozostałe małe. W tym celu:
// a. Zdefiniuj w klasie Osoba statyczną metodę formatujImie(), która przekazany do niej string sformatuje jak imię
// b. Zmodyfikuj setter dla imienia tak aby formatował podane imię za pomocą utworzonej wcześniej metody statycznej

class Osoba {
    constructor(imie, wiek) {
        this._imie = Osoba.formatujImie(imie);
        this._wiek = wiek;
    }
    get imie() {
        return this._imie;
    }
    set imie(value) {
        let formattedName = Osoba.formatujImie(value);
        this._imie = formattedName;
    }
    get wiek() {
        return this._wiek;
    }
    set wiek(value) {
        this._wiek = value;
    }
    przedstaw() {
        return `Jestem ${this.imie}, mam ${this.wiek} lat`;
    }
    static formatujImie(imie) {
        let formattedName = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
        return formattedName;
    }
}

// 2. Spraw aby imię formatowało się poprawnie również przy tworzeniu obiektu.

// Ćwiczenie 5
// 1. Zmień setter dla wieku w klasie Osoba tak aby wiek musiał być liczbą większą od 0.
// a. W przypadku gdy ustawiana wartość nie będzie liczbą rzuć wyjątek TypeError
// b. W przypadku gdy ustawiana wartość będzie liczbą, ale nie będzie dodatnia, rzuć wyjątek RangeError

class Osoba {
    constructor(imie, wiek) {
        this._imie = Osoba.formatujImie(imie);
        this._wiek = wiek;
    }
    get imie() {
        return this._imie;
    }
    set imie(value) {
        let formattedName = Osoba.formatujImie(value);
        this._imie = formattedName;
    }
    get wiek() {
        return this._wiek;
    }
    set wiek(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Wiek musi być liczbą');
        }
        if (value <= 0) {
            throw new RangeError('Wiek musi być większy od 0');
        }
        this._wiek = value;
    }
    przedstaw() {
        return `Jestem ${this.imie}, mam ${this.wiek} lat`;
    }
    static formatujImie(imie) {
        let formattedName = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
        return formattedName;
    }
}

// 2. Sprawdź zachowanie programu dla niepoprawnych wartości wieku. 

const osobaZlyWiek = new Osoba('Marek', 25); 
//! osobaZlyWiek.wiek = -5;
console.log("Ćwiczenie 5.2 -----------------");
console.log(osobaZlyWiek.przedstaw());

// Ćwiczenie 6
// 1. Opakuj operację zmiany wieku pracownika instrukcją try/catch. Dla każdego z oczekiwanych wyjątków (TypeError, RangeError) po złapaniu wypisz na konsoli komunikat opisujący przyczynę błędu.

const pracownikZlyWiek = new Osoba('Jan', 25);
try {
    pracownikZlyWiek.wiek = 5;
}
catch (error) {
    if (error instanceof TypeError) {
        console.log('Error! Wiek musi być liczbą');
    }
    else if (error instanceof RangeError) {
        console.log('Error! Wiek musi być większy od 0');
    }
}

// 2. Sprawdź zachowanie programu dla niepoprawnych i poprawnych wartości wieku. 
console.log("Ćwiczenie 6.1 -----------------");
console.log(pracownikZlyWiek.przedstaw());


// Ćwiczenie 1
// 2. Utwórz obiekt klasy Osoba i wypisz jego zawartość na konsoli korzystając z metody przedstaw().

const osoba = new Osoba('marek', 25);
console.log("Ćwiczenie 1.2 -----------------");
console.log(osoba.przedstaw());

// 3. Zmień utworzonej osobie imię i wiek.
osoba.imie = 'Kasia';
osoba.wiek = 30;

// 4. Po0nownie wypisz utworzony obiekt na konsoli.
console.log("Ćwiczenie 1.4 -----------------");
console.log(osoba.przedstaw());


// Ćwiczenie 2
// 1. Zdefiniuj klasę Pracownik do reprezentacji pracowników posiadających imię, wiek i zawód jako podklasę klasy Osoba. 
// Zdefiniuj w klasie odpowiedni konstruktor 3-argumentowy oraz metodę przedstaw() zwracającą tekstową reprezentację zawartości obiektu np. w formacie „Jestem Marek, mam 25 lat i pracuję jako portier”.
// a. W konstruktorze klasy Pracownik wywołaj konstruktor klasy Osoba zlecając mu inicjalizację pól cechujących osoby (niekoniecznie będące pracownikami)
// b. W implementacji metody przedstaw() wykorzystaj wywołanie metody przedstaw() z nadklasy

class Pracownik extends Osoba {
    constructor(imie, wiek, zawod) {
        super(imie, wiek);
        this.zawod = zawod;
    }
    przedstaw() {
        return `${super.przedstaw()} i pracuję jako ${this.zawod}`;
    }
}

// ćwiczenie 2 
// 2. Utwórz obiekt klasy Pracownik i wypisz jego zawartość na konsoli korzystając z metody przedstaw ().

const pracownik = new Pracownik('Marek', 25, 'portier');
console.log("Ćwiczenie 2.2 -----------------");
console.log(pracownik.przedstaw());

// 3. Zmień utworzonemu pracownikowi imię i wiek.

pracownik.imie = 'kaSIA';
pracownik.wiek = 30;

// 4. Ponownie wypisz utworzony obiekt na konsoli.
console.log("Ćwiczenie 2.4 -----------------");
console.log(pracownik.przedstaw());



