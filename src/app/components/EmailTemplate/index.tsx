import { Html, Heading, Text } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  company: string;
}

const EmailTemplate = ({
  name,
  email,
  message,
  company,
}: EmailTemplateProps) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Client Message</Heading>
      <Text>A visitor to your site SITE_NAME sent you a message!</Text>
      <Text>Name: {name}</Text>
      {company && <Text>Company: {company}</Text>}
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;