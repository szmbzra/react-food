import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home/Home';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
</Router>
  )
}

export default App
