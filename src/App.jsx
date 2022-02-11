import Home from './components/home/Home'
import './App.css'
// import Footer from './components/footer'
// import Header from './components/header/Header'
import Cse from './components/departments/Cse'

import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
         {/* <Header /> */}
         <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/cse/*"  element={<Cse />}/> 
    {/* <Route path="/cse/about"  element={<Home />}/>  */}
         </Routes>
         {/* <Footer /> */}
    </div>
  )
}

export default App
