import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';
import Header from './components/layout/Header/Header';
import CustomCursor from './components/ui/CustomCursor/CustomCursor';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Scrollbar from 'react-scrollbars-custom';

const App = () => {
  return (
    <div>

      <Scrollbar
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex', 
        }}
        // thumbMinSize={50} 
        noScrollX 
      >
        <CustomCursor />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Scrollbar>

    </div>
  );
};

export default App;
// json-server --watch db.json --port 5000
