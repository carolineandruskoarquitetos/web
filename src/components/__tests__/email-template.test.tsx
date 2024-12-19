/// <reference types="@testing-library/jest-dom" />
import { render } from "@testing-library/react";
import { ContactEmailTemplate } from "../email-template";

// Mock the react-email components
jest.mock("@react-email/components", () => ({
  Html: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Body: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Container: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Text: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  Section: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Heading: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
  Img: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("ContactEmailTemplate", () => {
  it("renders with provided props", () => {
    const props = {
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, this is a test message",
    };

    const { getByText } = render(<ContactEmailTemplate {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.email)).toBeInTheDocument();
    expect(getByText(props.message)).toBeInTheDocument();
  });
});
