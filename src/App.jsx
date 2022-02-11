import './App.css'
// import Footer from './components/footer'
// import Header from './components/header/Header'
import Home from './components/home/Home'
import Cse from './components/departments/Cse'

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cse/*" element={<Cse />}/> 
         </Routes>
    </div>
  )
}

export default App
