import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='primary' size='md' text='Press' onClick={()=>{}}/>
    </>
  )
}

export default App
