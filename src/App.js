import './App.css';
import React from 'react';
import Home from './task-3/layout/home'
import InformationFirst from './task-3/component/information_first'
import InformationSecond from './task-3/component/information_second';
import Footers from './task-3/component/footer';

function App() {
  return (
    <div>
      <Home />
      <InformationFirst />
      <InformationSecond />
      <Footers/>
    </div>
  );
}

export default App;
