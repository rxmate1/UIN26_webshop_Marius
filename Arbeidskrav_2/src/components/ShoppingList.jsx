import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items, changeCount, toggleBought }) {
    return (
        <ul>
            {items.map(item => (
                <ShoppingItem key={item.id}item={item}changeCount={changeCount}toggleBought={toggleBought}
                />
            ))}
        </ul>
    )
}