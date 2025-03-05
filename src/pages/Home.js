import "../styles/styles.css";
import React from "react";
import imagem1 from "../images/psicologia imagem.png";

function Home({ isLogged }) {
  return (
    <main>
      <section class="secao-inicio-nav">
        <main>
          <div>
            <div> {isLogged ? <h2>Bem-vindo(a)!</h2> : ""} </div>
            <h1>Cuidando da mente, transformando vidas.</h1>
            <p>
              O atendimento psicológico é fundamental para promover a saúde
              mental e o bem-estar emocional. Ele oferece um espaço seguro e
              acolhedor onde as pessoas podem expressar seus sentimentos,
              enfrentar desafios e desenvolver estratégias para lidar com o
              estresse, ansiedade e depressão. Além disso, a terapia ajuda a
              melhorar a autoestima e a autoconfiança, permitindo que os
              indivíduos alcancem uma melhor qualidade de vida.
            </p>
            <p>
              Além dos benefícios individuais, o atendimento psicológico também
              tem um impacto positivo na sociedade como um todo. Ao ajudar as
              pessoas a resolverem seus problemas emocionais e comportamentais,
              a terapia contribui para a redução de conflitos interpessoais e
              melhora a comunicação e os relacionamentos. Isso resulta em
              comunidades mais saudáveis e harmoniosas, onde as pessoas são mais
              capazes de apoiar umas às outras e de enfrentar os desafios
              coletivos de maneira mais eficaz.
            </p>
          </div>
          <img src={imagem1} alt="caixa cheia de opçoes" />
        </main>

        <div class="botoes">
          <button>Central de Segurança</button>
          <button>central de Privacidade</button>
          <button>Central dos Pais</button>
          <button>Central de Transparência</button>
          <button>Central de Noticias</button>
          <button>Central de Políticas</button>
        </div>
      </section>
    </main>
  );
}

export default Home;