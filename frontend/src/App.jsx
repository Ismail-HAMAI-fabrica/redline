import './App.css'
import { BrowserRouter, Route, Routes , Link , NavLink} from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Gestpage';
import AdminPage from './pages/adminPage';
import Dachbord from './layout/Dachbord';
import Customers from './components/dachbord-components/Customers';
import Order from './components/dachbord-components/Order';
import State from './components/dachbord-components/State';
import Recipes from './components/dachbord-components/Recipes';
import Adminscreen from './components/dachbord-components/Adminscreen';
import Reg from './components/Reg';
import Login from './components/Logein';
import { Gallery } from './layout/Gallery';






function App() {
  return (   
    <BrowserRouter>
      
        <Routes>
          {/* homepage */}
        <Route index element={<Home/>}/>
            <Route path='/signIn' element={<Reg/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dach' element={<AdminPage/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
                    {/* adminpage */}
        <Route path='/dashboard' element={<Dachbord/>}>
            <Route path='/dashboard/' element={<Adminscreen/>}/>
            <Route path='/dashboard/customers' element={<Customers/>}/>
            <Route path='/dashboard/order' element={<Order/>}/>
            <Route path='/dashboard/state' element={<State/>}/>
            <Route path='/dashboard/recipes' element={<Recipes/>}/>
        </Route>
          
        </Routes>

    </BrowserRouter>
  );
}

export default App
