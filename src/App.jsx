import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
      </main>
      <Footer/>
    </>
  )
}

export default App
