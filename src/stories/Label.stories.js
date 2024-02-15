import React from 'react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
};

export const Default = (args) => <Label {...args} />;
Default.args = {
  text: 'This is a  Label',
};

export const Disabled = (args) => <Label {...args} />;
Disabled.args = {
  text: 'This is a Label',
  disabled: true,
};
