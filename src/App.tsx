import './App.css';

import { Route, Routes, BrowserRouter as BR, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';

function App() {
  return (
    <BR>
    <header>
        <h1>BOCA</h1>
        <nav>
          <Link to='/'><h1>HOME</h1></Link>
          <Link to='/blogs'><h1>BLOGS</h1></Link>
        </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} /> 
        <Route path='/blogs/:id' element={<h1>detail blog</h1>}/>
        <Route path='*' element={<h1>404 this pages is not found</h1>} /> 
      </Routes>
    </BR>
  );
}

export default App;
