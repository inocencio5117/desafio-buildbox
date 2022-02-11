import React, { useEffect } from "react";
import { Container, PostButton } from "./styles";

import { FiImage } from "react-icons/fi";

interface UserInput {
  name: string;
  text: string;
}

interface InputInfoProps {
  name: string;
  text: string;
  userInput: UserInput[];
  setName: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput[]>>;
}

export function InputInfo({
  setName,
  setText,
  name,
  text,
  setUserInput,
  userInput,
}: InputInfoProps) {
  function handleUserSubmit(event: React.FormEvent) {
    event.preventDefault();

    setUserInput([{ name, text }, ...userInput]);

    setName("");
    setText("");
  }

  function clearFields() {
    setName("");
    setText("");
  }

  useEffect(() => {
    setName(name);
    setText(text);
  }, [name, setName, setText, setUserInput, text, userInput]);

  return (
    <Container>
      <div className="image-fake">
        <FiImage />
      </div>

      <form onSubmit={(e) => handleUserSubmit(e)}>
        <input
          type="text"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={text}
          placeholder="Mensagem"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="btn-container">
          <button type="button" onClick={clearFields}>
            Descartar
          </button>
          <PostButton type="submit" isFilled={name === "" && text === ""}>
            Publicar
          </PostButton>
        </div>
      </form>
    </Container>
  );
}
