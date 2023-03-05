import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonData from './components/PokemonData';
import UploadPokemonData from './components/UploadPokemonData';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="left"><UploadPokemonData/></div>
      <div className="right"><PokemonData/></div>
      </div>
    </div>
  );
}

export default App;
