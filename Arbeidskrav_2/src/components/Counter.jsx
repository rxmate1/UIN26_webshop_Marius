import { useState } from "react"
import ShoppingList from "./ShoppingList";

export default function Counter() {
  // Deklarerer en state-variabel 'count', satt til 0
  const [count, setCount] = useState(0);
    console.log(count)
  return (
    <section>
      <p>Du klikket {count} ganger</p>
      {/* Oppdaterer state, som får komponenten til å rendre på nytt */}
      <button onClick={() => setCount(ShoppingList)}>
        Legg til vare
      </button>
    </section>
  );

  
}
