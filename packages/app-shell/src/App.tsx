import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Main, Button } from '@fedlight/common-components';
import random from "lodash/random";

function App() {
  const val = random(1);
  return (
    <div className="App">
      <Main/>
      <Button title="Kiran" className="Rock"/>
    </div>
  );
}

export default App;
