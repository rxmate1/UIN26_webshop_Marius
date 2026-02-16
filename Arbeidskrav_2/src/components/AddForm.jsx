import { useState } from "react"
import ShoppingList from "./ShoppingList"
import App from "../App"

export default function AddForm({AddItem}) {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const handleSubmit = (e) => {
    console.log(e)
    AddItem (name, amount, false)
}

    return (
        <form action={handleSubmit}>
            <label>
                Vare
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label>
                Antall
            <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            </label>

            <button type="submit">Legg til vare</button>
        </form>
        )
}