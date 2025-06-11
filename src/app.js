import { useState } from "react";
import "./App.css";

function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Carlos Silva", idade: 28, plano: "Mensal" },
    { id: 2, nome: "Ana Paula", idade: 34, plano: "Trimestral" },
  ]);

  const [novoAluno, setNovoAluno] = useState({ nome: "", idade: "", plano: "" });

  const handleChange = (e) => {
    setNovoAluno({ ...novoAluno, [e.target.name]: e.target.value });
  };

  const adicionarAluno = () => {
    if (!novoAluno.nome || !novoAluno.idade || !novoAluno.plano) return;
    setAlunos([
      ...alunos,
      { id: alunos.length + 1, ...novoAluno, idade: parseInt(novoAluno.idade) },
    ]);
    setNovoAluno({ nome: "", idade: "", plano: "" });
  };

  return (
    <div className="App">
      <h1>Academia StackX</h1>
      <div className="formulario">
        <input
          type="text"
          name="nome"
          placeholder="Nome do aluno"
          value={novoAluno.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={novoAluno.idade}
          onChange={handleChange}
        />
        <select name="plano" value={novoAluno.plano} onChange={handleChange}>
          <option value="">Escolha um plano</option>
          <option value="Mensal">Mensal</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Anual">Anual</option>
        </select>
        <button onClick={adicionarAluno}>Adicionar Aluno</button>
      </div>

      <ul className="lista">
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <strong>{aluno.nome}</strong> - {aluno.idade} anos - Plano: {aluno.plano}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;