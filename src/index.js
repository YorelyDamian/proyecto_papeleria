import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Carrito from './Components/Views/Carrito';
import Inicio from './Components/Views/Inicio';
import CompCreateBlog from './blog/createBlog';
import CompEditBlog from './blog/editBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/Inicio' index element={<Inicio/>}></Route>
        <Route path='/Create' element={<CompCreateBlog/>}></Route>
        <Route path='/Carrito' element={<Carrito/>}></Route>
        <Route path='/edit/:id' element={<CompEditBlog/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals