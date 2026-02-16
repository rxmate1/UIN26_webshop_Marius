import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import AddForm from "./components/AddForm"

function App() {

const [items, setItems] = useState ([
  {id: 1, name: "Sjokolademelk", amount: 1, bought: false},
  {id: 2, name: "Baguette", amount: 2, bought: true}
])

function AddItem(name, amount, bought){
  const newItem = {id: items.length+1, name: name, amount: amount, bought: bought}
  setItems([...items, newItem])
}

function changeCount(id, newAmount) {
  setItems(items.map(item => item.id === id ? {...item, amount: newAmount} : item)) 
}

return (
  <main>
    <h1>Handleliste</h1>
    <AddForm AddItem= {AddItem}/>
    <ShoppingList items={items} changeCount={changeCount} />
  </main>
)


}
export default App
