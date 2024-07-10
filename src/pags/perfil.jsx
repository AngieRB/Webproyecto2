import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/perfil.css';

function Perfil() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar los datos del usuario desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    // Si hay datos almacenados, rellenar los campos del formulario
    if (storedUser) {
      setNombre(storedUser.nombre || '');
      setApellido(storedUser.apellido || '');
      setCedula(storedUser.cedula || '');
      setCorreo(storedUser.correo || '');
      setContrasena(storedUser.contrasena || '');
      setConfirmarContrasena(storedUser.contrasena || '');
    }
  }, []);

  const validarCambios = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      cedula.trim() === '' ||
      correo.trim() === '' ||
      contrasena.trim() === '' ||
      confirmarContrasena.trim() === ''
    ) {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    if (!/^\d{10}$/.test(cedula)) {
      setErrorMessage('La cédula debe contener exactamente 10 dígitos numéricos.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      setErrorMessage('El correo electrónico no es válido.');
      return;
    }

    const usuario = {
      nombre,
      apellido,
      cedula,
      correo,
      contrasena,
    };

    // Guardar el usuario en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Mostrar los datos almacenados en la consola
    console.log('Datos del usuario guardados:', usuario);

    alert('Registro exitoso. Redirigiendo a la página principal.');
    navigate('/pag1');
  };

  const handleCedulaInput = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 10); // Asegura máximo 10 dígitos
    setCedula(value);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a href="/pag1">
            <img src="../img/Logo.png" />
          </a>
        </div>
        <section className="banner1">
          <h1>Perfil</h1>
        </section>
        <div className="user-dropdown">
          <button className="dropbtn" onClick={() => document.getElementById('dropdown-options').classList.toggle('show')}>
            <img className="user_logo" src="../img/user_logo.png"  />
          </button>
          <div className="dropdown-content" id="dropdown-options">
            <a href="/perfil">Perfil</a>
            <a href="/docs">Mis publicaciones</a>
            <a href="/login">Cerrar Sesión</a>
          </div>
        </div>
      </header>
      <section className="card_white">
        <div className="contenido-cuadro">
          <section className="registro">
            <form onSubmit={validarCambios}>
              <div className="columna">
                <label htmlFor="nombre">Nombres:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <label htmlFor="apellido">Apellidos:</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
                <label htmlFor="cedula">Cédula:</label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={cedula}
                  onChange={handleCedulaInput}
                  required
                /><br/><br/>
                <label htmlFor="correo">Correo electrónico:</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
                <label htmlFor="confirmar-contrasena">Confirmar contraseña:</label>
                <input
                  type="password"
                  id="confirmar-contrasena"
                  name="confirmar-contrasena"
                  value={confirmarContrasena}
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                  required
                />
                <button type="submit" className="boton_g">Guardar Cambios</button>
                <p>{errorMessage}</p>
              </div>
            </form>
          </section>
        </div>
      </section>

      <footer>
        <p>Todos los derechos reservados &copy; Angie Ramirez 2024</p>
      </footer>
    </div>
  );
}

export default Perfil;
