import React from 'react';
import HeroImage from './HeroImage'; // Assuming the HeroImage component is in the same directory

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
};

export const Default = (args) => <HeroImage {...args} />;
Default.args = {
  src: 'https://via.placeholder.com/600x300',
  alt: 'Hero Image',
};

export const Disabled = (args) => <HeroImage {...args} />;
Disabled.args = {
  src: 'https://via.placeholder.com/600x300',
  alt: 'Hero Image',
  disabled: true,
};
