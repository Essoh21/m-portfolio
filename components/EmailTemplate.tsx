import React from "react";
import {
  Html,
  Text,
  Container,
  Section,
  Body,
  Heading,
  Preview,
  Head,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type EmailTemplateProps = {
  email: string;
  message: string;
};

export default function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from portfolio contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is : {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
