import logo from './logo.svg';
import './App.css';
import OpeningScreen from './OpeningScreen';
import './Default.css';
import HomePage from "./HomePage";
import { Route, Link, Routes, Router,} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<OpeningScreen/>}/>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
