const [error, setError] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !amount) {
        setError("Vare og antall må begge fylles ut!")
        return
    }

    AddItem(name, Number(amount), false)
    setName("")
    setAmount("")
    setError("")
}