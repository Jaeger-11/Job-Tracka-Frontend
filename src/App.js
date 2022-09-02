import './App.scss';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
