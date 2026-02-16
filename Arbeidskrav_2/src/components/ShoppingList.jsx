import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items, changeCount }) {
    return (
        <ul>
            {items.map(item => (
                < ShoppingItem key={item.id} amount ={item.amount} bought={item.bought} item={item} changeCount={changeCount} />
            ))}
        </ul>
    )
}
