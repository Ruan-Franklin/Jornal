import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Modal from './Componentes/Modal';
import CadastroArtigo from './Componentes/CadastroArtigo';
import ListagemArtigos from './Componentes/ListagemArtigos';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span className="material-icons">home</span>
              </Link>
            </li>
            <li>
              <Link to="/cadastro">
                <span className="material-icons">create</span>
                Cadastrar Artigo
              </Link>
            </li>
            <li>
              <Link to="/artigos">
                <span className="material-icons">list</span>
                Listagem de Artigos
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Modal />} />
          <Route path="/cadastro" element={<CadastroArtigo />} />
          <Route path="/artigos" element={<ListagemArtigos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
