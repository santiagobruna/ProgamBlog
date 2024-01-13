import { useState } from "react";
import Blog from "./components/Blog/Blog";
import Card from "./components/Card/Card";
import "./App.css";
import Rodape from "./components/Rodape/Rodape";
function App() {
  // Array de posts
  const posts = [
    {
      id: 1,
      data: "12 de janeiro, 2024",
      titulo: "O que é linguagem de programação? Conheça as principais",
      texto:
        "Uma linguagem de programação é um conjunto de regras e instruções usadas para gerar programas. Ela fornece um conjunto de comandos e estruturas que permitem aos programadores comunicar suas intenções ao computador. Principais linguagens: Python, C#, C++, JavaScript, PHP, Swift, Java, Go, SQL, Ruby.",
    },
    {
      id: 2,
      data: "12 de janeiro, 2024",
      titulo: "O que é o desenvolvimento web?",
      texto:
        "O Desenvolvimento Web é uma área da tecnologia voltada à construções de sites para a Internet. São divididas em 2 partes, a codificação do lado cliente(Front-End) e a do lado do servidor(Back-End).",
    },
    {
      id: 3,
      data: "01 de janeiro, 2024",
      titulo: "O que é lógica de programação?",
      texto:
        "É a a habilidade ou técnica que um programador utiliza para desenvolver algoritmos de maneira eficiente e eficaz. Envolve a capacidade de pensar de maneira lógica, estruturada e modular para resolver problemas e criar soluções computacionais. ",
    },
    {
      id: 4,
      data: "10 de janeiro, 2024",
      titulo: "GitHub agora permite fazer login sem precisar de senha",
      texto:
        "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
    },
    // ... outros posts
  ];
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePesquisaChange = (e) => {
    setTermoPesquisa(e.target.value);
  };
  // Filtra os posts com base no termo de pesquisa
  const postsFiltrados = posts.filter(
    (post) =>
      post.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      post.texto.toLowerCase().includes(termoPesquisa.toLowerCase())
  );
  return (
    <div className="App">
      <Blog />
      <input
        type="search"
        value={termoPesquisa}
        onChange={handlePesquisaChange}
        placeholder="Pesquisar no ProgamBlog"
      />
      {postsFiltrados.length === 0 ? (
        <p className="error">Nenhum resultado encontrado para a pesquisa.</p>
      ) : (
        postsFiltrados.map((post) => (
          <Card
            key={post.id}
            data={post.data}
            titulo={post.titulo}
            texto={post.texto}
          />
        ))
      )}
      <Rodape />
    </div>
  );
}
export default App;
