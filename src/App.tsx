import './App.css';

import { Route, Routes, BrowserRouter as BR, Link, Navigate, useParams } from 'react-router-dom';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import { BlogsDetails } from './components/pages/BlogsDetails';
import { Auth } from './components/pages/Auth';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Context from './log-context'



function App() {
  const ctx = useContext(Context);

  useEffect(() => {

  }, [ctx.isLog])

  return (

    <BR>
    <header>
        <h1 data-testid="test-title">BOCA</h1>
        <nav>
          {
            ctx.isLog && (<>
                     <Link to='/'><h1>HOME</h1></Link>
                     <Link to='/blogs'><h1>BLOGS</h1></Link>
                     <button onClick={ctx.logOut}>LOGOUT</button>
                     </>)
          }

{
            !ctx.isLog && (<>
                     <Link to='auth'><h1>LOGIN</h1></Link>
                     </>)
          }
          
          
        </nav>
    </header>
   
    { !ctx.islog && window.location.href === '/' && <Navigate to="/auth" replace={true} /> }
      <Routes>

        
        { !ctx.isLog && <Route path='/auth' element={<Auth />} />}
        { ctx.isLog && (<>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} /> 
          <Route path='/blogs/:id' element={<BlogsDetails />}/>
          
        </>)}
       
        <Route path='*' element={<h1>404 this pages is not found</h1>} /> 
      </Routes>
      
    </BR>
  );
}

export default App;
