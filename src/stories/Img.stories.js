import React from 'react';
import Img from './Img'; // Assuming the Img component is in the same directory

export default {
  title: 'Components/Img',
  component: Img,
};

export const Default = (args) => <Img {...args} />;
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};

export const Disabled = (args) => <Img {...args} />;
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
};
