import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Details from './pages/details';
import Gallery from './pages/photoGallery';
import Upload from './pages/photoUpload';
import Rsvp from './pages/rsvp';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/photoGallery' element={<Gallery />} />
        <Route path='/photoUpload' element={<Upload />} />
      </Routes>
    </Router>

  );
}

export default App;
