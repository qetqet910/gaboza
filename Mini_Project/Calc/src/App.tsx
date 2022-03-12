import React from 'react';
import Calculator from './components/Cal';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    body{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #f5f6fa;
    }
  }
`

function App() {
  return (
    <div className="App">
      <Global></Global>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
