import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
      <footer
          className={'footer'}
      >
          <footer className={'footer'}>
              <p>© ООО «Алл Сии» {new Date().getFullYear()}</p>
              <p>Наш основной сайт: <a href="https://allsee.team/">allsee.team</a></p>
              <p>Наш Telegram: <a href="https://t.me/allseeteam">t.me/allseeteam</a></p>
          </footer>
      </footer>
  );
};
