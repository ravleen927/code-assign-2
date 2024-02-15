import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  // Optional parameter to center the component in the Canvas.
  layout: 'centered',
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
  // Control the background color using argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Default = (args) => (
    <>
      <RadioButton id="option1" label="Option 1" {...args} />
      <RadioButton id="option2" label="Option 2" {...args} />
    </>
  );
  
  Default.args = {
    // Set any default props here if needed
  };
  

export const Checked = (args) => (
    <>
      <RadioButton id="option1" label="Option 1" {...args} />
      <RadioButton id="option2" label="Option 2" {...args} />
    </>
  );
  
  Checked.args = {
    checked: true, // Set the checked state to true for both options
  };
  

  export const Disabled = (args) => (
    <>
      <RadioButton id="option1" label="Option 1" disabled={args.disabled} />
      <RadioButton id="option2" label="Option 2" disabled={args.disabled} />
    </>
  );
  
  Disabled.args = {
    label: 'Disabled Option',
    checked: false,
    disabled: true, // Radio button is disabled
  };
  
