import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
        style={{
            textAlign: 'center',
            marginTop: '20px'
        }}
    >
      <p>Contact us at: info@allseellc.com</p>
      <p>Copyright © {new Date().getFullYear()} ALL SEE LLC. All rights reserved.</p>
    </footer>
  );
};
