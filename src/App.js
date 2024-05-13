import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redes from './components/Redes';
import Footbar from './components/Footbar';
import Card from './components/Card';


function App() {
  return (
    <div className="App">      
    {/*--------- navbars------ */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
      </Routes>

      <Footbar/>
    </div>
  );
}

export default App;
