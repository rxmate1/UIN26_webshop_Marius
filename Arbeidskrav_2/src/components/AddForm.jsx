import { useState } from "react"

export default function AddForm({ AddItem }) {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !amount) {
            setError("Både Vare og antall må begge fyles ut!")
            return
        }

        if (Number(amount) < 1) {
            setError("Antal burde være minst 1")
            return
        }

        AddItem(name, Number(amount), false)

        setName("")
        setAmount("")
        setError("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Vare
                <input 
                    type="text"
                    value={name}
                    placeholder="Egg.."
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label>
                Antall
                <input 
                    type="number"
                    min="1"
                    value={amount}
                    placeholder="2"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>

            <button type="submit">Legg til vare</button>

            {error && <p>{error}</p>}
        </form>
    )
}