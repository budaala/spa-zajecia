// Zdefiniuj komponent ProductItem, który będzie generował element <li>, w takiej formie jak wcześniej w ramach renderowania ProductList. Wartości title i brand produktu powinny być przekazywane do komponentu ProductItem poprzez props. Ważne: Atrybut key należy ustawić w znaczniku ProductItem, a nie dopiero w <li> podczas jego renderowania. (Klucze elementów listy y musi ustawiać komponent nadrzędny w stosunku do elementów listy.)

export default function ProductItem({ product, key }) {
    return (
        <li key={key}>
            {product.title} ({product.brand})
        </li>
    );
}