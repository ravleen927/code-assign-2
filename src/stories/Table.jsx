import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table = ({ headers, rows, footer, disabled }) => {
  return (
    <table className={`custom-table ${disabled ? 'disabled' : ''}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            {footer.map((footerCell, index) => (
              <td key={index}>{footerCell}</td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  footer: PropTypes.arrayOf(PropTypes.node),
  disabled: PropTypes.bool,
};

export default Table;
