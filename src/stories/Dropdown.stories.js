import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  // Optional parameter to center the component in the Canvas.
  layout: 'centered',
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
  // Control the background color using argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultValue: 'option2', // Default selected option
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: true, // Dropdown is disabled
};
