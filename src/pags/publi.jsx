import React, { useState } from 'react';
import Logo from "../img/Logo.png";
import userlog from "../img/user_logo.png";
import "../styles/publi.css";
import { NavLink } from 'react-router-dom';
import Perfil from './perfil';

const CrearPubli = () => {
  const [tipo, setTipo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);

  const togglePerfilModal = () => {
    setPerfilModalOpen(!perfilModalOpen);
  };

  const handleCrearPublicacion = (event) => {
    event.preventDefault();

    if (!tipo || !titulo || !autor || !fecha || !descripcion) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    console.log('Información de la publicación creada:', {
      tipo,
      titulo,
      autor,
      fecha,
      descripcion,
    });

    setTipo('');
    setTitulo('');
    setAutor('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <div className='container'>
      <header>
        <div className="logo">
          <NavLink to='/pag1'><img src={Logo} alt="Logo" /></NavLink>
        </div>
        <section className="banner">
          <h1>Crear nueva publicación</h1>
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
        <div className="cuadro-sombreado">
          <form onSubmit={handleCrearPublicacion}>
            <label htmlFor='titulo'>Título:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />

            <label htmlFor='autor'>Autor:</label>
            <input
              type="text"
              id="autor"
              name="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />

            <label htmlFor='tipo'>Tipo de Publicación:</label>
            <select
              id="tipo"
              name="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="">Seleccione el tipo de publicación</option>
              <option value="Tesis">Tesis</option>
              <option value="Articulo Cientifico">Articulo Cientifico</option>
              <option value="Revista">Revista</option>
            </select>

            <label htmlFor='fecha'>Fecha de Publicación:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />

            <label htmlFor='descripcion'>Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="4"
              required
            ></textarea>

            <input type="submit" value="Crear Publicación" />
          </form>
        </div>
      </main>
      <footer>
        <div className="pie">
          <p>Todos los derechos reservados &copy; Angie Ramirez 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default CrearPubli;
