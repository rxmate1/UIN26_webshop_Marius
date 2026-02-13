import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import Counter from "./components/Counter"
import AddForm from "./components/AddForm"

function App() {

const [items, setItems] = useState ([
  {id: 1, name: "Sjokolademelk", amount: 1, bought: false},
  {id: 2, name: "Baguette", amount: 2, bought: true}
])

return (
  <main>
    <h1>Handleliste</h1>
    <AddForm />
    <ShoppingList items={items} />
  </main>
)


}
export default App
