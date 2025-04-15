import React, { CSSProperties } from "react";
import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text style={text}>Hello {name}!</Text>
            <Link href="https://react.email/" className="text-red-400">
              https://react.email/
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const text: CSSProperties = {
  color: "blue",
};

export default WelcomeTemplate;
