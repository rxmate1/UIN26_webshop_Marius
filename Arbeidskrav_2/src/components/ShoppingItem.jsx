export default function ShoppingItem({ item, changeCount, toggleBought }) {
    return (
        <li> 
            <input 
                type="checkbox"
                checked={item.bought}
                onChange={() => toggleBought(item.id)}
            />
            {item.name}
            <input 
                type="number"
                min="1"
                value={item.amount}
                onChange={(e) => changeCount(item.id, Number(e.target.value))}
            />
        </li>
    )
}