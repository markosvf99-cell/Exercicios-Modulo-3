import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Módulo 03 – React: Hooks e Estado</h1>

      <h2>Exercício 1 – Contador com limites</h2>
      <Contador />

      <h2>Exercícios 2 e 3 – Formulário controlado e título dinâmico</h2>
      <Formulario />
    </div>
  );
}

export default App;
