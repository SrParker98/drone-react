import { useState } from 'react'
import Topbar from './components/Topbar'
import Landing from './components/Landing'
import DronDescription from './components/DronDescription'
import './App.css'
import Seconddrone from './components/Seconddrone'
import Lastdrone from './components/Lastdrone'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <Topbar/>
      <Landing/>
      <DronDescription/>
      <Lastdrone/>
      <Seconddrone/>
      
      
        
    </div>
  )
}

export default App;
