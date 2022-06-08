import './App.css';
import OpeningScreen from './OpeningScreen/OpeningScreen';
import OurStory from './OurStory/OurStory';
import ChainGame from './ChainGame/ChainGame';
import  FaqComp  from './Faq/FaqComp';
import './Default.css';
import HomePage from './Homepage/HomePage';
import { Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import EnsComp from './EnsComp/EnsComp';

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
            <Route path="/faq" element={<FaqComp/>}/>
            <Route path="/ens" element={<EnsComp/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
