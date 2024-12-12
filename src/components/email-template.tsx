import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, message }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#44403c",
        borderBottom: "1px solid #e7e5e4",
        paddingBottom: "10px",
        marginBottom: "20px",
      }}
    >
      Novo contato do site
    </h2>

    <div style={{ marginBottom: "20px" }}>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          margin: "10px 0",
        }}
      >
        <strong style={{ color: "#44403c" }}>Nome:</strong> {name}
      </p>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          margin: "10px 0",
        }}
      >
        <strong style={{ color: "#44403c" }}>Email:</strong> {email}
      </p>
    </div>

    <div style={{ marginTop: "20px" }}>
      <strong style={{ color: "#44403c" }}>Mensagem:</strong>
      <div
        style={{
          backgroundColor: "#f5f5f4",
          padding: "15px",
          borderRadius: "4px",
          marginTop: "10px",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </div>
    </div>

    <div
      style={{
        marginTop: "30px",
        paddingTop: "20px",
        borderTop: "1px solid #e7e5e4",
        fontSize: "14px",
        color: "#78716c",
      }}
    >
      <p>
        Este email foi enviado através do formulário de contato do site Caroline
        Andrusko.
      </p>
    </div>
  </div>
);
