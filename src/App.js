

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Components/Dashboard';
import Products from './components/Components/Products';
import Alerts from './components/Components/Alerts';
import Shipments from './components/Components/Shipments';
function App() {
  
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path='/products'  element={<Products/>} >
    </Route>
    <Route exact path='/alerts' element={<Alerts/>}></Route>   
    <Route exact path='/shipments' element={<Shipments/>}></Route>  
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

