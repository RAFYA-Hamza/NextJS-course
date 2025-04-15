import React from "react";
import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

export const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}!</Text>
          <Link href="https://react.email/">https://react.email/</Link>
        </Container>
      </Body>
    </Html>
  );
};
