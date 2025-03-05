import "../styles/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/imagem logo psicologia.png";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <section className="secao-inicio-nav">
      <header>
        <img src={logo} alt="logo" />

        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/agendamentos">Agendar Consultas</Link>}
          {isLoggedIn && <Link to="/meus-agendamentos">Meus Agendamentos</Link>}
          <Link to="#">Teleconsultas</Link>
          <Link to="#">Rede Credenciada</Link>
          <Link to="#">Fale Conosco</Link>

          {/* Se estiver logado, mostra "Minha Conta" e Logout */}
          {isLoggedIn ? (
            <>
              <Link to="/user-menu">Minha Conta</Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onLogout}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="botao-entrar">
                <button type="button" className="btn btn-light">
                  Entrar
                </button>
              </Link>
              <Link to="/register" className="botao-entrar">
                <button type="button" className="btn btn-light">
                  Cadastrar
                </button>
              </Link>
            </>
          )}
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
