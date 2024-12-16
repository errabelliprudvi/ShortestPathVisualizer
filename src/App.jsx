import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PathfindingVisualizer from './PathFindingVisualizer/PathfindingVisualizer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PathfindingVisualizer/>
    </>
  )
}

export default App
