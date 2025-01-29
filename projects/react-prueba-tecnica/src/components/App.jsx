import { useEffect, useState } from "react";
import { useCatImage } from "../hooks/useCatImage";
import { useCatFact } from "../hooks/useCatFact";

export function App(){

const { fact, refreshRandomFact } = useCatFact()
const {imageUrl} = useCatImage({fact})
//const [factError, setFactError] = useState()

    const handleClick = async () => {
        refreshRandomFact()
    }

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {fact && <p>{fact}</p>} 
                    <img 
                        src={imageUrl} 
                        alt={`imagen de un gatito con la primera palabra la cual es ${fact}`}
                        style={{ width: '400px', height: '400px' }}
                        />
            </section>
        </main>
    )
}