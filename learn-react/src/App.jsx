
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'

import './App.css';

export default function App() {
  return (
    <main>
      
      <nav>
          <Link to="/" >Hpme </Link>
          <Link to="/about" >About </Link>
          <Link to="/work" >work </Link>
    </nav>

    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Work" element={<Work></Work>} />
    </Routes>
      
    </main>
  )
}
