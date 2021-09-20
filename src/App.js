import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      < Header />
      <div className="wrapper">
      < SideNav />
      < Profile />
      </div>
    </div>
  );
}

export default App;
