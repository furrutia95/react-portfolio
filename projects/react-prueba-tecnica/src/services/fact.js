
const API_URL_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
    const res = await fetch(API_URL_FACT)
    // if(!res.ok){
    //     throw new Error('No se pudo obtener la cita')
    // }
    const data = await res.json()
    const { fact } = data
    return fact
    // .catch((error) => {
    //     //si primero hay un error con la PETICION
    //     //o bien si hay un error con la RESPUESTA
    //     setFactError(error.message)
    // })
}
