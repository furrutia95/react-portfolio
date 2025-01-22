import { WINNER } from "../constants.js"
export const checkWinnerFrom = (boardToCheck) => {
    // revisamos cada una de las posiciones posibles para ganar
    for (const combination of WINNER) {
      const [a, b, c] = combination
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        // actualizamos el estado
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }


  export const checkEndGame = (newBoard) => {
    // si todo el tablero esta lleno
    return newBoard.every((square) => square !== null)
  }
