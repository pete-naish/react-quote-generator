import React from 'react';

export const QuoteText = ({ quote, author}) => (
  <div>
    <p className="text-justify">{quote}</p>
    <p className="font-weight-bold text-right">By: {author}</p>
  </div>
);
