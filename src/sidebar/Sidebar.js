import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">Umuhinzi</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Farmers</li>
            <li>Analytics</li>
            <li>Products</li>
          </ul>
        </nav>
        <div className="settings-logout">
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
      <div className="menu-button" onClick={toggleSidebar}>
        ☰
      </div>
    </>
  );
}

export default Sidebar;
