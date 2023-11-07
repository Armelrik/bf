
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Organigrame from './routes/Organigrame';
import BackToTopButton from './components/BackToTopButton';
import Ambassador from './routes/Ambassador';
import Signup from './routes/Organigrame';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/ambassador' element={<Ambassador/>} />
        <Route path='/organigrame' element={<Organigrame />} />
        {/*  <Route path='/signup' element={<Signup/>} /> */}
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
