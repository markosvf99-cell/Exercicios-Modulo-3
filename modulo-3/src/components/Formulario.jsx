import { useState, useEffect } from "react";

function Formulario() {
  // Exercício 2: um único objeto de estado para os 3 campos
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });

  // Exercício 2: função genérica reaproveitada nos 3 campos
  function atualizarCampo(campo, valor) {
    setDados({ ...dados, [campo]: valor });
  }

  // Exercício 3: muda o título da aba conforme o nome
  useEffect(() => {
    document.title = dados.nome
      ? `Digitando: ${dados.nome}`
      : "Formulário de Contato";
  }, [dados.nome]);

  return (
    <div>
      <div>
        <input
          placeholder="Nome"
          value={dados.nome}
          onChange={(e) => atualizarCampo("nome", e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          value={dados.email}
          onChange={(e) => atualizarCampo("email", e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Mensagem"
          value={dados.mensagem}
          onChange={(e) => atualizarCampo("mensagem", e.target.value)}
        />
      </div>

      <h3>Valores digitados:</h3>
      <p>Nome: {dados.nome}</p>
      <p>Email: {dados.email}</p>
      <p>Mensagem: {dados.mensagem}</p>
    </div>
  );
}

export default Formulario;