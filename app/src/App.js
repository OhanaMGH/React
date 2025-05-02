import React, { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('black');

  const mostrarMensaje = () => {
    setMensaje('¡Hola! Este es el mensaje desplegado.');
  };

  const cambiarColor = () => {
    const colores = ['red', 'green', 'blue', 'orange', 'purple', 'teal'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Docker</h1>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
      <button onClick={cambiarColor} style={{ marginLeft: '10px' }}>
        Cambiar color del mensaje
      </button>
      {mensaje && (
        <p style={{ marginTop: '20px', color: color }}>{mensaje}</p>
      )}
    </div>
  );
}

export default App;
