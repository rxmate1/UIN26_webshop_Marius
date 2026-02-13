export default function ShoppingItem({ item }) {
    return (
        <li> 
            <input type="checkbox" checked={item.bought} readOnly />
            {item.name} ({item.amount})
        </li>
            
        
    )
}