import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Project</h1>
      <p>This project allows you to generate personalized letters based on your resume and job description.</p>
      <Link
          to="/generate"
      >
          Try Now
      </Link>
    </div>
  );
};
