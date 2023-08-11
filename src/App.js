import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import Home from './Components/Home';
import Items from './Components/Itemspage';
import './App.css';

function App() {
  const curentstate = useSelector((state) => state.animebyid);
  const json = JSON.parse(localStorage.getItem('key'));
  const id = (curentstate.id !== '') ? curentstate.id : json.key;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/items/${id}`} element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
