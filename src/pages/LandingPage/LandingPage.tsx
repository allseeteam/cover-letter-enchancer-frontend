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
          <h1 className={'landing-header'}>Welcome to Our Project</h1>
          <p className={'landing-text'}>This project allows you to generate personalized letters based on your resume
              and job description.</p>
          <button
              className="landing-button"
              onClick={navigateToGenerate}
          >
              Try Now
          </button>
      </div>
  );
};
