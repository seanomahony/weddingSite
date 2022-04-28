import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import Gallery from './pages/photoGallery';
import Upload from './pages/photoUpload';
import Rsvp from './pages/rsvp';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/photoGallery' element={<Gallery />} />
        <Route path='/photoUpload' element={<Upload />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
