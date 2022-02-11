import React, { SetStateAction } from "react";

import { FiImage } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Container, Title } from "./styles";

interface Input {
  name: string;
  text: string;
}

interface HeaderProps {
  userInput: Input[];
  setUserInput: React.Dispatch<SetStateAction<Input[]>>;
}

export function Feed({ userInput, setUserInput }: HeaderProps) {
  function removeItem(item: Input) {
    setUserInput(userInput.filter((input) => input.name !== item.name));
  }

  return (
    <>
      <Title>Feed</Title>
      {/* <Container>
        <div className="close-button-container">
          <AiOutlineCloseCircle />
        </div>

        <div className="content-wrapper">
          <div className="image-container">
            <FiImage />
          </div>

          <div className="text-section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ut cupiditate quo deserunt, iure dicta facilis aspernatur odio
              nemo dolorem est corporis eos, itaque molestiae unde culpa rerum?
              Earum, repellendus?
            </p>

            <div className="send-by">
              <span>Enviado por</span>
              <span>Vinicius</span>
            </div>
          </div>
        </div>
      </Container> */}
      {userInput.map((value) => (
        <Container>
          <div className="close-button-container">
            <AiOutlineCloseCircle onClick={() => removeItem(value)} />
          </div>

          <div className="content-wrapper">
            <div className="image-container">
              <FiImage />
            </div>

            <div className="text-section">
              <p>{value.text}</p>

              <div className="send-by">
                <span>Enviado por</span>
                <span>{value.name}</span>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
}
