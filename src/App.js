import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
