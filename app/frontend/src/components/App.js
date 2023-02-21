import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtigoSerializer from './ArtigoSerializer';

function App() {
  const [artigos, setArtigos] = useState([]);
  const [artigo, setArtigo] = useState({
    titulo: '',
    descricao: '',
    autor: '',
    data_pub: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us87.gitpod.io/api/artigos/');
        setArtigos(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const artigoSerializer = new ArtigoSerializer();
    const serializedData = artigoSerializer.serialize(artigo);
    try {
      const response = await axios.post('https://8000-ruanfranklin-jornal-ltpeils3gbd.ws-us87.gitpod.io/api/artigos/', serializedData);
      const newArtigo = response.data;
      setArtigos([...artigos, newArtigo]);
      setArtigo({
        titulo: '',
        descricao: '',
        autor: '',
        data_pub: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtigo((prevArtigo) => ({ ...prevArtigo, [name]: value }));
  };

  return (
    <div>
      <h1>Meu Jornal</h1>
      <table id="artigos">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Autor</th>
            <th>Data de publicação</th>
          </tr>
        </thead>
        <tbody>
          {artigos.map((artigo) => (
            <tr key={artigo.id}>
              <td>{artigo.titulo}</td>
              <td>{artigo.descricao}</td>
              <td>{artigo.autor}</td>
              <td>{artigo.data_pub}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Novo Artigo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" value={artigo.titulo} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" name="descricao" value={artigo.descricao} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" name="autor" value={artigo.autor} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="data_pub">Data de publicação:</label>
          <input type="text" id="data_pub" name="data_pub" value={artigo.data_pub} onChange={handleInputChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
