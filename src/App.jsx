import { useState } from 'react';
import './App.css';
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Page from './components/UI/page';
import Login from './components/Login';
import CrearPoliza from './components/CrearPoliza';
import ListarPoliza from './components/ListarPolizas';
import BuscarPoliza from './components/BuscarPolizaxID';
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleMenuClick = (view) => {

    setCurrentView(view);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header onMenuClick={handleMenuClick} />
          <Page>
            {currentView === 'Home' && <Home />}
            {currentView === 'crear-poliza' && <CrearPoliza />}
            {currentView === 'listar-polizas' && <ListarPoliza />}
            {currentView === 'buscar-poliza' && <BuscarPoliza />}
            {/* Puedes añadir más condiciones para otros componentes */}
          </Page>
          <Footer />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;