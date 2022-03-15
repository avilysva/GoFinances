import React from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";

import {
  Container,
  Header,
  Title,
  Form,
  Fields
} from "./styles";

export function Register(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  );
}