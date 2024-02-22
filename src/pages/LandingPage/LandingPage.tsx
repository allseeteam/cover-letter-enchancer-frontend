import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  return (
    <div className={'landing-container'}>
      <h1 className={'landing-header'}>Welcome to Our Project</h1>
      <p className={'landing-text'}>This project allows you to generate personalized letters based on your resume and job description.</p>
      <Link
          className={'landing-button'}
          to="/generate"
      >
          Try Now
      </Link>
    </div>
  );
};
