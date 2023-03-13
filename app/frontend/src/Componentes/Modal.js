import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleShowModal}>Cadastrar artigo</button>
      {showModal && (
        <div>
          <div onClick={handleHideModal}>Fechar</div>
          <Link to="/cadastro">Cadastrar novo artigo</Link>
          <Link to="/artigos">Listar artigos</Link>
        </div>
      )}
    </div>
  );
}

export default Modal;
