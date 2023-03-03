import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [artigos, setArtigos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchArtigos() {
      const response = await axios.get('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us89.gitpod.io/api/artigos/');
      setArtigos(response.data);
    }
    fetchArtigos();
  }, []);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div className="App">
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.id}>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.descricao}</p>
            <p>Autor: {artigo.nome_autor}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleOpenModal}>Abrir Modal</button>
      {modalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h1>Artigos</h1>
              <button onClick={handleCloseModal}>X</button>
            </div>
            <div className="modal-body">
              <ul className="artigos-list">
                {artigos.map((artigo) => (
                  <li key={artigo.id} className="artigo">
                    <h2>{artigo.titulo}</h2>
                    <p>{artigo.descricao}</p>
                    <p>Autor: {artigo.nome_autor}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
