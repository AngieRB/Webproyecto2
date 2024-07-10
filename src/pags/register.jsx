import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flech from "../img/flecha_ret.png";
import '../styles/register.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [facultad, setFacultad] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validarRegistro = (event) => {
    event.preventDefault();

    // Limpiar mensaje de error
    setErrorMessage('');

    // Validación de campos
    if (nombre.trim() === "" || cedula.trim() === "" || correo.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "" || facultad === "") {
      setErrorMessage("Por favor, complete todos los campos.");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    if (!/^\d{10}$/.test(cedula)) {
      setErrorMessage("La cédula debe contener 10 dígitos numéricos.");
      return;
    }

    if (!correo.includes('@')) {
      setErrorMessage("El correo electrónico debe contener un '@'.");
      return;
    }

    // Almacenar datos en localStorage
    const usuario = {
      nombre,
      cedula,
      correo,
      contrasena,
      facultad,
    };

    // Log para verificar los datos antes de almacenarlos
    console.log('Datos de usuario:', usuario);

    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Verificar si los datos se guardaron en localStorage
    const storedUser = localStorage.getItem('usuario');
    console.log('Usuario guardado en localStorage:', storedUser);

    // Mostrar mensaje de registro exitoso
    alert("Registro exitoso. Redirigiendo al inicio de sesión.");
    navigate('/login'); // Redirigir al inicio de sesión
  };

  const handleCedulaInput = (event) => {
    // Reemplazar todos los caracteres no numéricos
    const cedulaInput = event.target.value.replace(/\D/g, "");
    setCedula(cedulaInput);
  };

  return (
    <div>
      <main>
        <section className="registro">
          <button className="boton-retroceso" onClick={() => window.history.back()}>
            <img src={flech} alt="Retroceder" />
          </button>
          <h1>Registro de Usuario</h1>

          <form id="registro-form" onSubmit={validarRegistro}>
            <label htmlFor="nombre">Nombre Completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
            />

            <label htmlFor="correo">Correo Electrónico:</label>
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

            <label htmlFor="confirmar-contrasena">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmar-contrasena"
              name="confirmar-contrasena"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              required
            />

            <label htmlFor="facultad">Facultad:</label>
            <select
              id="facultad"
              name="facultad"
              value={facultad}
              onChange={(e) => setFacultad(e.target.value)}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Facultad de Ciencias Medicas">Facultad de Ciencias Medicas</option>
              <option value="Facultad de Ingenieria, Industria y Construccion">Facultad de Ingenieria, Industria y Construccion</option>
              <option value="Facultad de Ciencias de la Vida y Tencologias">Facultad de Ciencias de la Vida y Tencologias</option>
              <option value="Facultad de Educaion,Servicios,artes y Humanidades">Facultad de Educaion,Servicios,artes y Humanidades</option>
              <option value="Facultad de Ciencias Administrativas, Contables y Comercio">Facultad de Ciencias Administrativas, Contables y Comercio</option>
              <option value="Facultad de Ciencias Sociales, Derecho y Bienestar">Facultad de Ciencias Sociales, Derecho y Bienestar</option>
            </select>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="botones-container">
              <button type="submit" className="boton-log">
                Registrarse
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Registro;
