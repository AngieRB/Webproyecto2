// src/App.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/pag1.css';
import Logo from '../img/Logo.png';
import userlog from '../img/user_logo.png';
import Perfil from './perfil';

function Pag1() {
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [documentos, setDocumentos] = useState([]);

  const toggleDropdown = () => {
    const dropdownOptions = document.getElementById('dropdown-options');
    dropdownOptions.classList.toggle('show');
  };

  const togglePerfilModal = () => {
    setPerfilModalOpen(!perfilModalOpen);
  };

  useEffect(() => {
    // Obtener documentos almacenados en localStorage
    const storedDocumentos = JSON.parse(localStorage.getItem('documentos')) || [];
    setDocumentos(storedDocumentos);
  }, []);

  const actualizarCuadro = (tipo, documentos) => {
    return (
      <div id={`cuadro-${tipo}`} className="cuadro-blanco">
        <ul>
          {documentos.map((documento) => (
            <li key={documento.id} className={`busqueda ${tipo.toLowerCase()}`}>
              <Link to=""><h3>{documento.nombre}</h3></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="card">
      <header>
        <div className="logo">
          <NavLink to="/pag1">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <section className="banner">
          <h1>Publicaciones Académicas</h1>
        </section>
        <div className="user-dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <img className="user_logo" src={userlog} alt="User Logo" />
          </button>
          <div className="dropdown-content" id="dropdown-options">
            <NavLink to= "/perfil">Perfil</NavLink>
            <NavLink to="/docs">Mis publicaciones</NavLink>
            <NavLink to="/">Cerrar Sesión</NavLink>
          </div>
          {perfilModalOpen && <Perfil closeModal={() => setPerfilModalOpen(false)} />}
        </div>
      </header>

      <main>
        <section className="busqueda">
          <input type="text" placeholder="Buscar publicaciones..." />
          <button>Buscar</button>
          <div className="separador">
            <div className="columna">
              <div className="contenido-columna">
                <p>Revistas</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Revista #1:</h3>
                  <p>Descripción de la revista...</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="contenido-columna">
                <p>Documentos Científicos</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Documento #1:</h3>
                  <p>Descripción del documento...</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="contenido-columna">
                <p>Tesis</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Tesis #1:</h3>
                  <p>Descripción de la tesis...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Todos los derechos reservados &copy; Angie Ramirez 2024</p>
      </footer>
    </div>
  );
}

export default Pag1;
