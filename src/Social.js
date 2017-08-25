import React from 'react';
import { Twitter, Facebook } from 'react-feather';

export const Social = () => (
  <div className="social">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/intent/tweet"
    >
      <Twitter />
    </a>
    <a
      href="./index.html"
    >
      <Facebook />
    </a>
  </div>
);
