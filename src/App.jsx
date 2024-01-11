import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipe from "../src/pages/Recipe";
import HomePage from '../src/pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
  
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Recipe" element={<Recipe />} />
        </Routes>
      </div>
   
  );
}
