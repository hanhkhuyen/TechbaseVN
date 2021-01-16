import React from 'react';
import Home from './containers/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default React.memo(App);
