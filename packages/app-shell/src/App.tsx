import React from 'react';
import logo from './logo.svg';
import './App.scss';
//import { Main, Button } from '@fedlight/common-components';
import random from "lodash/random";

function App() {
  const val = random(1);
  import('@fedlight/common-components')
  .then(module => console.log('MODULE LOADED', module))
  .catch((e) => console.log('NOT ABLE TO LOAD FEDLIGHT COMMON COMPONENTS', e))
  return (
    <div className="App">
      {/* <Main/>
      <Button title="Kiran" className="Rock"/> */}
    </div>
  );
}

export default App;
