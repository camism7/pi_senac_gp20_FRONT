import React, { useState, useEffect } from "react";

const MeusAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:5001/api/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setAgendamentos(data);
        } else {
          console.error("Erro ao buscar agendamentos.");
        }
      } catch (error) {
        console.error("Erro ao carregar os agendamentos:", error);
      }
    };

    fetchAgendamentos();
  }, []);

  return (
    <div>
      <h2>Meus Agendamentos</h2>
      {agendamentos.length > 0 ? (
        <ul>
          {agendamentos.map((appt) => (
            <li key={appt._id}>
              {appt.date} às {appt.time} com Dr(a). {appt.doctor}
            </li>
          ))}
        </ul>
      ) : (
        <p>Você não tem agendamentos no momento.</p>
      )}
    </div>
  );
};

export default MeusAgendamentos;
