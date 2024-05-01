// @ts-nocheck
import React from 'react';

import { FeatureSection } from '../FeatureSection';

export default {
  title: 'Components/FeatureSection',
  component: FeatureSection,
  argTypes: {},
};

const Template = (args) => <FeatureSection {...args} />;

const defaults = {};

export const Primary = Template.bind({});
Primary.args = {
  ...defaults,
};
