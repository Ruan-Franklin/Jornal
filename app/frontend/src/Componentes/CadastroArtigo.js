import React, { useState } from 'react';
import './CadastroArtigo.css';

function CadastroArtigo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeAutor, setNomeAutor] = useState('');

  function handleTituloChange(event) {
    setTitulo(event.target.value);
  }

  function handleDescricaoChange(event) {
    setDescricao(event.target.value);
  }

  function handleNomeAutorChange(event) {
    setNomeAutor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do artigo para o backend
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
        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroArtigo;
