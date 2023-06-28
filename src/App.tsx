import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Counter from './Redux/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/redux-counter'>Counter</Link>
          <Routes>
            <Route path='/redux-counter' element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
