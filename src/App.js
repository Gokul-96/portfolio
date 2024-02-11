import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Home/Contact';
import Projects from './pages/Home/Projects';
import About from './pages/Home/About';
import Experiences from './pages/Home/Experiences';
import Courses from './pages/Home/Courses';

import  Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/contact' element={<Contact/>}/>

     </Routes>
    </BrowserRouter>

  );
}

export default App;

//npm start