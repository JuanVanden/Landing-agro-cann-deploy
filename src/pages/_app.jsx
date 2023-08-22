// _app.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div> {/* Utiliza un elemento contenedor válido aquí */}
      <Header />
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
