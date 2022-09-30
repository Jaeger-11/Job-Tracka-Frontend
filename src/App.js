import './App.scss';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Applications from './Pages/Applications';
import NewApplication from './Pages/NewApplication';
import Analytics from './Pages/Analytics';
import Profile from './Pages/Profile';
import Layout from './Components/layout';
import Protected from './Components/protected';
import Application from './Pages/Application';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <Protected>
            <Layout/>
          </Protected>
        }>
          <Route index element={<Dashboard/>} />
          <Route path='/applications' element={<Applications/>}/>
          <Route path='/applications/:id' element={<Application/>}/>
          <Route path='/new' element={<NewApplication/>} />
          <Route path='/analytics' element={<Analytics/>} />
        </Route>

        <Route path='/home' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={
          <Layout>
            <Profile/>
          </Layout>
        } />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
