import React from "react";
import { Feed } from "../Feed";
import { InputInfo } from "../InputInfo";
import { Container } from "./styles";

export function Panel() {
  return (
    <Container>
      <InputInfo />
      <Feed />
    </Container>
  );
}
