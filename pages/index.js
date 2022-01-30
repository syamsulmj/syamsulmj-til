import React, {useState} from 'react';
import Navbar from '/components/common/navbar';
import Home from '/components/home/Home';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  )
}

export default App;
