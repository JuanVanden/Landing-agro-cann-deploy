// _app.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div> {/* Utiliza un elemento contenedor válido aquí */}
      <Header />
      <NavBar />
      <Component {...pageProps} />
     <Footer />
    </div>
  );
}

export default App;
