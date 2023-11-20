
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Organigrame from './routes/Organigrame';
import BackToTopButton from './components/BackToTopButton';
import Ambassador from './routes/Ambassador';
import Signup from './routes/Signup';
import Galery from './routes/Galery';
import Personnel from './routes/Personnel';
import ConsulCard from './routes/ConsulCard';
import Visas from './routes/Visas';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/ambassador' element={<Ambassador/>} />
        <Route path='/organigrame' element={<Organigrame />} />
        <Route path='/galery' element={<Galery />} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/personnel' element={<Personnel />} />
         <Route path='/visas' element={<Visas />} />
         <Route path='/ConsulCard' element={<ConsulCard />} />
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
