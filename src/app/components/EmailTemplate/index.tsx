import { Html, Heading, Text } from '@react-email/components';
import { snakeCase } from 'lodash';

const EmailTemplate = (formData: Record<string, string>) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Client Message</Heading>
      <Text>A visitor to your site SITE_NAME sent you a message!</Text>
      <hr />
      {Object.entries(formData).map(([key, val]) => (
        <Text key={snakeCase(key)}>
          {key}: {val}
        </Text>
      ))}
    </Html>
  );
};
export default EmailTemplate;
