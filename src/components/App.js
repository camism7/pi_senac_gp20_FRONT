import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Login from "../pages/Login";
import Agendamentos from "../pages/Agendamentos";
import MeusAgendamentos from "../pages/MeusAgendamentos";
import UserMenu from "../pages/UserMenu"; // Criar esta página para o menu do usuário

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Atualiza o estado ao carregar a página
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("token", "usuario_autenticado"); // Simula um token
    setIsLoggedIn(true);
    navigate("/user-menu"); // Redireciona para o menu do usuário
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Volta para Home
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="cover-container">
        <Routes>
          <Route path="/" element={<Home isLogged={isLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
          <Route path="/user-menu" element={<UserMenu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/styles.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import Navbar from "./Navbar";
// import { useState } from "react";
// import Login from "../pages/Login";
// import { useNavigate } from "react-router-dom";
// import Agendamentos from "../pages/Agendamentos";
// import MeusAgendamentos from "../pages/MeusAgendamentos";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
//   const navigate = useNavigate(); // Para redirecionar o usuário NOVO

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   //NOVO
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove o token de autenticação
//     setIsLoggedIn(false);
//     navigate("/"); // Redireciona para Home
//   };

//   return (
//     <div>
//       {/* NOVO NA NAVAR */}
//       <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//       <div className="cover-container">
//         <Routes>
//           <Route path="/" element={<Home isLogged={isLoggedIn} />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/login"
//             element={<Login onLoginSuccess={handleLoginSuccess} />}
//           />
//           <Route path="/agendamentos" element={<Agendamentos />} />
//           <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
