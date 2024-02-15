import React from 'react';
import { Button } from './Button2';

export default {
  title: 'Components/Button2',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  label: 'Button',
};

export const Large = (args) => <Button {...args} />;
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Disabled = (args) => <Button {...args} />;
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
