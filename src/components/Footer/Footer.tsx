import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
      <footer
          className={'footer'}
      >
        <p>© ООО «Алл Сии» {new Date().getFullYear()}</p>
        <p>Наши контакты: <a href="mailto:info@allsee.team">info@allsee.team</a></p>
      </footer>
  );
};
