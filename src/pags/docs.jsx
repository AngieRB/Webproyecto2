import React, { useState, useEffect } from 'react';
import Logo from "../img/Logo.png";
import userlog from "../img/user_logo.png";
import '../styles/docs.css';
import { NavLink } from 'react-router-dom';
import Perfil from './perfil';

function Docs() {
  const [documentos, setDocumentos] = useState([]);
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);

  useEffect(() => {
    const storedDocumentos = JSON.parse(localStorage.getItem('documentos')) || [];
    setDocumentos(storedDocumentos);
  }, []);

  const handleEliminarDocumento = (id) => {
    const nuevosDocumentos = documentos.filter((documento) => documento.id !== id);
    setDocumentos(nuevosDocumentos);
    localStorage.setItem('documentos', JSON.stringify(nuevosDocumentos));
  };

  const togglePerfilModal = () => {
    setPerfilModalOpen(!perfilModalOpen);
  };

  return (
    <body>
      <header>
        <div className="logo">
          <NavLink to='/pag1'><img src={Logo} alt="Logo" /></NavLink>
        </div>
        <section className="banner">
          <h1>Publicaciones Académicas</h1>
        </section>
        <div className="user-dropdown">
          <button className="dropbtn" onClick={togglePerfilModal}>
            <img className="user_logo" src={userlog} alt="User Logo" />
          </button>
          <div className="dropdown-content">    
            <NavLink to='/perfil'>Perfil</NavLink>
            <NavLink to='/docs'>Mis publicaciones</NavLink>
            <NavLink to='/'>Cerrar Sesión</NavLink>
          </div>
          {perfilModalOpen && <Perfil closeModal={() => setPerfilModalOpen(false)} />}
        </div>
      </header>
      <main>
        <section className="busqueda">
          <NavLink to="/publi"><button className="btn-crear">Crear Publicación</button></NavLink>
          <NavLink to="/creardoc"><button>Subir documento</button></NavLink>
        </section>
        <section className="publicaciones">
        <div class="documento">
                <h2>Documento #1</h2>
                <p>Descripción del documento #1.</p>
                <a href="ruta_al_documento1.pdf" target="_blank">Ver Documento</a>
            </div>
            <div class="documento">
                <h2>Documento #2</h2>
                <p>Descripción del documento #2.</p>
                <a href="ruta_al_documento2.pdf" target="_blank">Ver Documento</a>
            </div>
  
        </section>
      </main>
      <footer>
        <div className="pie">
          <p>Todos los derechos reservados &copy; Angie Ramirez 2024</p>
        </div>
      </footer>
    </body>
  );
}

export default Docs;
