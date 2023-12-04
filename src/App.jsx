import './App.css';
import AboutMe from './pages/LandingPage';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/resume';
import NavBar from './components/Nav'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
  
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<AboutMe/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>

    
 
    
 
    </>
  );
}

export default App;
