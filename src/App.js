import './App.css';
import OpeningScreen from './OpeningScreen';
import OurStory from './OurStory';
import './Default.css';
import HomePage from "./HomePage";
import { Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<OpeningScreen/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/story" element={<OurStory/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
