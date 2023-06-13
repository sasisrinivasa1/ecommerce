import React from 'react';

// import Routers
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages 
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// import Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path></Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
