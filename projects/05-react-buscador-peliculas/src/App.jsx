import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'


function useSearch(){
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return { query, setQuery, error }
}


function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({query, sort})

  const debouncedGetMovies = useCallback(
    debounce((query) => {
    getMovies({query})
  }, 500)
  ,[getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({query})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const value = event.target.value
    if (value.startsWith(' ')) return
    setQuery(value)
    debouncedGetMovies({query: value})
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input 
          style={{
            border:'1px solid transparent', 
            borderColor: error ? 'red' : 'green'
            }} onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, Star Wars, Star Trek...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> :<Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
