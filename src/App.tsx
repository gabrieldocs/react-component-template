import React, { useState } from 'react';
import './App.css';
import Card from './main/components/Card';
// import Wrapper from './main/components/Wrapper';

function App() {
  const [username, setUsername] = useState<string>('gabrieldocs')
  return (
    <>
      <input 
        className= "search-field" 
        placeholder="username"
        onChange={(e)=>{setUsername(e.target.value)}}/>
      <Card username={username}/>
    </>
  );
}

export default App;
