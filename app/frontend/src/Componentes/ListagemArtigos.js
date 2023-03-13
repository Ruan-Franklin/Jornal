import React, { useState, useEffect } from 'react';
import './listagem-artigos.css';

function ListagemArtigos() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us90.gitpod.io/api/artigos/')
      .then(response => response.json())
      .then(data => setArtigos(data));
  }, []);

  return (
    <div className="listagem-artigos">
      <h1>Lista de artigos</h1>
      <ul>
        {artigos.map(artigo => (
          <li key={artigo.id}>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.descricao}</p>
            <p>{artigo.nome_autor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListagemArtigos;
