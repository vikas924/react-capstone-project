import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Items from './Components/Itemspage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
