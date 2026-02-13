import { useState } from "react"
import Counter from "./Counter"
import ShoppingList from "./ShoppingList"

export default function AddForm() {
    return (
        <form>
            <label>
                Vare:
                <input type="text" />
            </label>
        
            <label>
                Antall:
                <input type="text" />
            </label>

            <Counter />

        </form>
    )

}