import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer
        className={'footer'}
    >
      <p>Contact us at: <a href="mailto:info@allseellc.com">info@allseellc.com</a></p>
      <p>Copyright © {new Date().getFullYear()} ALL SEE LLC. All rights reserved.</p>
    </footer>
  );
};
