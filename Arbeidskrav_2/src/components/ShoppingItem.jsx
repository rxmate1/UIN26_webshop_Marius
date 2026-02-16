export default function ShoppingItem({ item, changeCount }) {
    return (
        <li> 
            <input 
            type="checkbox" 
            defaultChecked = {item.bought} 
            />
            {item.name}

            <input 
            type="number" 
            value={item.amount}
            onChange={(e) => changeCount(item.id, Number(e.target.value))} /> 
        </li>

            
        
    )
}