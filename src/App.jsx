import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Production from './components/Production'

function App() {

  return (
    <div className=''>
     <Header/>
     <Slider/>
     <Production/>

    </div>
   
  )
}

export default App
