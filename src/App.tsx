import React from 'react';
import ApexColumn from './components/Column-Chart/Column-Chart';
import ApexLine from './components/Line-Chart/Line-Chart';
import Navbar from './components/Navbar/Navbar';
import ApexPie from './components/Pie-Chart/Pie-Chart'
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Bar' element={<ApexColumn />}></Route>
        <Route path='/Line' element={<ApexLine />}></Route>
        <Route path='/Pie' element={<ApexPie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
