import React from 'react';
import Home from './containers/Home/index';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default React.memo(App);
