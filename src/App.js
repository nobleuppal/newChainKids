import './App.css';
import OpeningScreen from './OpeningScreen/OpeningScreen';
import OurStory from './OurStory/OurStory';
import ChainGame from './ChainGame/ChainGame';
import './Default.css';
import HomePage from './Homepage/HomePage';
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
            <Route path="/game" element={<ChainGame/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
