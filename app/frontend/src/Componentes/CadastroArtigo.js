import React, { useState } from 'react';

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
    <div>
      <h1>Cadastro de Artigos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={handleTituloChange} />
        </label>
        <br />
        <label>
          Descrição:
          <textarea value={descricao} onChange={handleDescricaoChange} />
        </label>
        <br />
        <label>
          Nome do Autor:
          <input type="text" value={nomeAutor} onChange={handleNomeAutorChange} />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroArtigo;
