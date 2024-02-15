import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  // Optional parameter to center the component in the Canvas.
  layout: 'centered',
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
  // Control the background color using argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card Title',
  content: 'Default Card Content',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card Title',
  content: 'Disabled Card Content',
  disabled: true, // Card is disabled
};
