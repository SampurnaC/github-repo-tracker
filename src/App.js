import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import * as Pages from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/:name" element={<Pages.Repo />} />
      </Routes>
    </div>
  );
}

export default App;
