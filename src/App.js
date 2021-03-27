import React from 'react';
import './App.css';

import HeaderVar from './components/HeaderVar';
import SideLeftHeader from './components/layout/SideLeftHeader';
import SideContent from './components/layout/SideContent';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HeaderVar />
      <SideLeftHeader />
      <SideContent />
      <Home />
    </div>
  );
}

export default App;
