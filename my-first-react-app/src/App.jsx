
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import Counter from "./components/Counter"
import './App.css'
import Home from "./pages/Home"

function App() {

  return (
    <div>
      

      <Navbar />
      <Welcome name="sanika" />
  
      
        <Home />
        <Counter />
      
      
    </div>
    
    
  )
}

export default App

