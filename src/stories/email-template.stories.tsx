import { ContactEmailTemplate } from "@/components/email-template";

export default {
  title: "Components/ContactEmailTemplate",
  component: ContactEmailTemplate,
};

export const Default = {
  args: {
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, this is a test message.",
  },
};
