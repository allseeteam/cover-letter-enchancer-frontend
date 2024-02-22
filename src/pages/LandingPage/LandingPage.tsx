import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToGenerate = () => {
    navigate('/generate');
  };

  return (
      <div className={'landing-container'}>
          <h1 className={'landing-header'}>Добро пожаловать!</h1>
          <p className={'landing-text'}>На данном сайте вы можете сгенерировать сопроводительное письмо к вакансии по вашему шаблону с учётом её текста и вашего резюме.</p>
          <button
              className="landing-button"
              onClick={navigateToGenerate}
          >
              Попробовать
          </button>
      </div>
  );
};
