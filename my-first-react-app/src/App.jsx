
import Navbar from "./components/Navbar"
import {Welcome,User} from "./components/Welcome"
import Counter from "./components/Counter"
import './App.css'
import Home from "./pages/Home"
import Card  from "./components/Card"
import Button from "./components/Button"

function App() {

  return (
    <div>
      

      <Navbar />
      <Welcome name="sanika" />
       <User name="sejal" />
      
        <Home />
        <Counter />
        <Card>
          <h2>Hello</h2>
          <p>This is inside card</p>
        </Card> 
        <Button text="Click Me" onClick={() => alert("Button Clicked")} />
        
      
    </div>
    
    
  )
}

export default App;

