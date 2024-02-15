import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

const headers = ['Name', 'Age', 'Email'];
const rows = [
  ['John', 30, 'john@example.com'],
  ['Doe', 25, 'doe@example.com'],
];
const footer = ['Total', 55, ''];

export const Default = (args) => <Table {...args} />;
Default.args = {
  headers,
  rows,
  footer,
};

export const Disabled = (args) => <Table {...args} />;
Disabled.args = {
  headers,
  rows,
  footer,
  disabled: true,
};
