import React from 'react';
import Clipboard from './Clipboard';

function App() {
  return (
    <div className='App'>
      <h2>Copy To Clipboard</h2>
      <Clipboard />
      <div>
        Paste. <br />
        <textarea />
      </div>
    </div>
  );
}

export default App;
