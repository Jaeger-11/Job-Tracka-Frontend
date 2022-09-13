import './App.scss';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Applications from './Pages/Applications';
import NewApplication from './Pages/NewApplication';
import Analytics from './Pages/Analytics';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/applications' element={<Applications/>} />
        <Route path='/new' element={<NewApplication/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
