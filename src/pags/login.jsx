import React, { useState } from "react";
import flech from "../img/flecha_ret.png";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Limpiar mensaje de error
    setErrorMessage('');

    // Recuperar el usuario almacenado en localStorage
    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    // Mostrar datos almacenados en la consola
    console.log('Usuario almacenado en localStorage:', storedUser);

    // Verificar si los datos ingresados coinciden con los almacenados
    if (storedUser && storedUser.correo === email && storedUser.contrasena === password) {
      // Redirigir a la página principal
      alert("Inicio de sesión exitoso.");
      navigate('/pag1'); // Cambiar a la ruta correcta según tu configuración
    } else {
      // Mostrar mensaje de error si los datos no coinciden
      setErrorMessage('Correo electrónico o contraseña incorrectos.');
    }
  };

  return (
    <main>
      <section className="login">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <Link to="/" className="boton-retroceso">
            <img src={flech} alt="Flecha de retroceso" />
          </Link>

          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="input-link">
            <button type="submit" className="boton-login">Iniciar Sesión</button>
            <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
