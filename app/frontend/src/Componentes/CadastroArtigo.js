import axios from 'axios';
import React, { useState } from 'react';
import './CadastroArtigo.css';

function CadastroArtigo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeAutor, setNomeAutor] = useState('');
  const [emailAutor, setEmailAutor] = useState('');

  function handleTituloChange(event) {
    setTitulo(event.target.value);
  }

  function handleDescricaoChange(event) {
    setDescricao(event.target.value);
  }

  function handleNomeAutorChange(event) {
    setNomeAutor(event.target.value);
  }

  function handleEmailAutorChange(event) {
    setEmailAutor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      titulo: titulo,
      descricao: descricao,
      nome_autor: nomeAutor,
      email_autor: emailAutor,
    };
    axios.post('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us92.gitpod.io/api/artigos/', data)
      .then(response => {
        console.log(response);
        alert('Artigo salvo com sucesso!');
      })
      .catch(error => {
        console.error(error);
        alert('Erro ao salvar o artigo!');
      });
  }

  return (
    <div className="cadastro-artigo">
      <h1>Cadastro de Artigos</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" value={titulo} onChange={handleTituloChange} />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" value={descricao} onChange={handleDescricaoChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nomeAutor">Nome do Autor:</label>
          <input type="text" id="nomeAutor" value={nomeAutor} onChange={handleNomeAutorChange} />
        </div>
        <div className="form-group">
          <label htmlFor="emailAutor">Email do Autor:</label>
          <input type="email" id="emailAutor" value={emailAutor} onChange={handleEmailAutorChange} />
        </div>
        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroArtigo;
