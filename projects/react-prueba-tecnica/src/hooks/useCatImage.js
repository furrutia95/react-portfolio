import { useState, useEffect } from "react"
export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()
    // para recuperar la cita al cargar la pagina
    //para recuperar la imagen cada vez que hay una cita nueva
    useEffect(() => {
        if(!fact) return
        const fistWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${fistWord}`)
        .then(response => {
            const { url } = response
            console.log(url)
            setImageUrl(url)
        })
    }, [fact])

    return { imageUrl }
} // {imageUrl}
