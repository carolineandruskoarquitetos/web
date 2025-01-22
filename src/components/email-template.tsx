import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Heading,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, message }) => (
  <Html>
    <Body style={{ fontFamily: "Arial, sans-serif" }}>
      <Container
        style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}
      >
        <Section
          style={{
            textAlign: "center",
            marginBottom: "40px",
            borderBottom: "2px solid #1c1917",
            paddingBottom: "20px",
          }}
        >
          <Heading
            style={{
              color: "#1c1917",
              fontSize: "24px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0",
            }}
          >
            Novo Contato
          </Heading>
        </Section>

        <Section
          style={{
            backgroundColor: "#f5f5f4",
            padding: "30px",
            marginBottom: "30px",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #e7e5e4",
              paddingBottom: "15px",
            }}
          >
            <Heading
              as="h2"
              style={{
                color: "#1c1917",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "5px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Informações do Contato
            </Heading>
            <Text style={{ margin: "5px 0", color: "#44403c" }}>
              <strong>Nome:</strong> {name}
            </Text>
            <Text style={{ margin: "5px 0", color: "#44403c" }}>
              <strong>Email:</strong> {email}
            </Text>
          </div>

          <div>
            <Heading
              as="h2"
              style={{
                color: "#1c1917",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Mensagem
            </Heading>
            <Text
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "4px",
                color: "#44403c",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </div>
        </Section>

        <Section
          style={{
            textAlign: "center",
            color: "#78716c",
            fontSize: "14px",
            borderTop: "1px solid #e7e5e4",
            paddingTop: "20px",
          }}
        >
          <Text style={{ margin: "5px 0" }}>
            Este email foi enviado através do formulário de contato do site.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
