import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import AboutPage from './components/about/about';
import Campus from './components/campus/campus';
import Academics from './components/academic/academics';
import Placements from './components/placement/placement';
import News from './components/news/news';


function App() {
  return (
    <div className="App">
      <Navbar />
      
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/aboutpage" element={ <AboutPage /> } />
          <Route path="/campus" element={ <Campus /> } />
          <Route path="/academics" element={<Academics /> } />
          <Route path="/placements" element={ <Placements /> } />
          <Route path="/news" element={ <News /> } />
       </Routes>

      <Footer />
    </div>
  );
}

export default App;
