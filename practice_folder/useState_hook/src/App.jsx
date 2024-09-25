import { useState } from 'react'


function App() {
  const [color, setColor] = useState('Red')

  const [car, setCar] = useState({
    brand: 'Ferrari',
    year: '2023',
    model: 'Rome',
    color: 'Gold'
  })

  const [count, setCount] = useState(0)

  const handleColorChange = () => {
    setColor('Blue')
  }

  const handleColorUpdate = () => {
    setCar((prev) => {
      return {...prev, color: 'Yellow'}
    })
  }

  const handleQuadIncreament= () => {
    setCount(prev => prev +1)
    setCount(prev => prev +1)
    setCount(prev => prev +1)
    setCount(prev => prev +1)
  }

  return (
    <>
    <div>
    <h4>My favourite color is {color}</h4>
    <button onClick={handleColorChange}>Click to Change</button>
    </div>

    <h1>My {car.brand}</h1>
    <h4>Is a {car.color} {car.model} machine from {car.year}</h4>
    <button onClick={handleColorUpdate}>Update</button>
    <div>

    {/* <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>

      </div> */}

      <div>
        <h3>Count: {count}</h3>
        <button onClick={handleQuadIncreament}>Increase by 4</button>
      </div>

    </div>
   
    </>
  )
}

export default App
