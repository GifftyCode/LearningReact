import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count +1)
    }, 2000)
  }, [count])

  return (
    <h1>I have been rendered {count} times!</h1>
  )
}

export default App
