export default function ShoppingItem({ item }) {
    return (
        <li> 
            <input type="checkbox" checked={item.bought} readonly />
            {item.name} ({item.amount})
        </li>
            
        
    )
}