import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
      })
  }, [])

  return (
    <>
      <h1>Jokes</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map(joke => (
          <p key={joke.id}>{joke.value}</p>
        ))
      }
    </>
  )
}

export default App
