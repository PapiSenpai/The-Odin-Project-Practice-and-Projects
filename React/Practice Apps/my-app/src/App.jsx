import { useState } from 'react'
import './App.css'
import { GsapTo } from './pages/GsapTo'
import { GsapForm } from './pages/GsapFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GsapTo></GsapTo>
      <br />
      <GsapForm></GsapForm>
    </>
  )
}

export default App
