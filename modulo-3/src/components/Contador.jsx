import { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

  function incrementar() {
    if (contagem < 10) setContagem(contagem + 1);
  }

  function decrementar() {
    if (contagem > 0) setContagem(contagem - 1);
  }

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span> {contagem} </span>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Contador;