import React from 'react';
import './App.css';
import LayoutAssistance from './layout/LayoutAssistance';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <LayoutAssistance/>
        </BrowserRouter>
    </div>
  );
}

export default App;
