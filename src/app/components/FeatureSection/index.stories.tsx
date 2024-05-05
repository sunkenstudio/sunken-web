// @ts-nocheck
import React from 'react';

import { FeatureSection } from '../FeatureSection';

export default {
  title: 'Components/FeatureSection',
  component: FeatureSection,
  argTypes: {},
};

const Template = (args) => <FeatureSection {...args} />;

const defaults = {
  featureData: [
    {
      type: 'headset',
      subHeader: '24 Hour Customer Service',
      blurb: 'Need help? Our team of specialists is ready to make your day!',
    },
    {
      type: 'gift',
      subHeader: 'Send a Gift!',
      blurb: 'Shopping for someone else? No problem!',
    },
    {
      type: 'student',
      subHeader: 'Academic Portal',
      blurb: 'Browse student resources and office hours.',
    },
    {
      type: 'coffee',
      subHeader: 'Buy us a Cup of Coffee!',
      blurb: 'Support our work and keep us awake!',
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaults,
};
