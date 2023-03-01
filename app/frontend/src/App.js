import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Componentes/Modal';

function App() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    async function fetchArtigos() {
      const response = await axios.get('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us89.gitpod.io/api/artigos/');
      setArtigos(response.data);
    }
    fetchArtigos();
  }, []);

  return (
    <div className="App">
      <h1>Artigos</h1>
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.id}>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.descricao}</p>
            <p>Autor: {artigo.autor.nome}</p>
          </li>
        ))}
      </ul>
      <Modal />
    </div>
  );
}

export default App;
