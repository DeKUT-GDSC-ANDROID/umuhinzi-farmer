import React from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Farmers from './farmer/Farmer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <header>
          <input type="text" placeholder="Search" className="search-bar"/>
          <div className="user-info">
            <span>Mabroukie Factory</span>
            <span>mabroukie@gmail.com</span>
          </div>
        </header>
        <Farmers />
      </div>
    </div>
  );
}

export default App;