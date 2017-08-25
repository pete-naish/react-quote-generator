import React from 'react';

export const Button = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-info"
    onClick={onClick}
  >
    Get my quote
  </button>
);
