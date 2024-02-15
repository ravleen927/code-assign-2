import React from 'react';
import Text from './Text'; // Import your Text component

export default {
  title: 'Components/Text',
  component: Text,
  layout: 'centered',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = (args) => <Text {...args} />;
Default.args = {
  text: 'Default Text', // Default text for the text component
};

export const CustomText = (args) => <Text {...args} />;
CustomText.args = {
  text: 'Custom Text', // Custom text for the text component
};

export const Colored = (args) => <Text {...args} />;
Colored.args = {
  text: 'Colored Text', // Text for the colored text component
  backgroundColor: '#ffcc00', // Background color for the text component
};

export const Disabled = (args) => <Text {...args} />;
Disabled.args = {
  text: 'Disabled Text',
  disabled: true,
};
