import HomePage from './pages/Home'
import { Routes, Route } from "react-router";
import '../src/styles/global.css'

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={ <HomePage /> } />
    </Routes>
    </>

    
  )
}

export default App
