import React from "react";
import { Container } from "./styles";

import { FiImage } from "react-icons/fi";

export function InputInfo() {
  return (
    <Container>
      <div className="image-fake">
        <FiImage />
      </div>

      <form action="">
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Mensagem" />

        <div className="btn-container">
          <button type="button">Descartar</button>
          <button type="button">Publicar</button>
        </div>
      </form>
    </Container>
  );
}
