import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
// import Footer from './components/footer'
import '/src/navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Navbar></Navbar>
      
  )
}

export default App
