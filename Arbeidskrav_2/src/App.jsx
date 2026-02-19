// Ikke brukt AI-generert kode, men tatt i bruk W3Schools som er et bredt og godt hjelpemiddel https://www.w3schools.com/REACT/DEFAULT.ASP
// Har også en mor som jobber med React og slik, så har fått litt hjelp, men mesteparten av koden er individuelt produsert!
// Har i tilegg tatt i bruk koden som ble produsert i forelesning som hjelpemiddel!

import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import AddForm from "./components/AddForm"
import './App.css'

function App() {

const [items, setItems] = useState ([
  {id: 1, name: "Melk", amount: 1, bought: false},
  {id: 2, name: "Egg", amount: 2, bought: true}
])

function AddItem(name, amount, bought){
  const newItem = {id: items.length+1, name: name, amount: amount, bought: bought}
  setItems([newItem, ...items])
}

function changeCount(id, newAmount) {
  if (newAmount < 1) return

  setItems(items.map(item =>
    item.id === id ? { ...item, amount: newAmount } : item
  ))
}

function toggleBought(id) {
  setItems(items.map(item =>
    item.id === id ? { ...item, bought: !item.bought } : item
  ))
}



return (
  <main>
    <h1>Handleliste</h1>
    <AddForm id="AddForm" AddItem= {AddItem}/>
    <ShoppingList items={items} changeCount={changeCount} toggleBought={toggleBought} />
  </main>
)


}
export default App
