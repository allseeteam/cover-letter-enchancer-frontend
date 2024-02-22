import React, { useState } from 'react';
import { GeneratedLetterResponce } from "../../types";
import './GenerationPage.css';

export const GenerationPage: React.FC = () => {
  const [template, setTemplate] = useState('');
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleGenerate = async () => {
      const response = await fetch(
            'http://localhost:8000/generate_letter/',
            {
                method: 'POST',
                body: JSON.stringify({
                    letter_template: template,
                    resume: resume,
                    job_description: jobDescription
                }),
                headers: { 'Content-Type': 'application/json' }
            }
        );
        const data: GeneratedLetterResponce = await response.json();
        setGeneratedLetter(data.generated_letter);
  };

  return (
    <div className={'generation-container'}>
      <h2 className={'generation-header'}>Generate Your Letter</h2>
      <textarea
          className={'generation-input'}
          placeholder="Letter Template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
      />
      <textarea
          className={'generation-input'}
          placeholder="Resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
      />
      <textarea
          className={'generation-input'}
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
      />
      <button
          className={'generation-button'}
          onClick={handleGenerate}
      >
          Generate
      </button>
      <div className={'generation-result'}>
        <h3>Generated Letter:</h3>
        <p>{generatedLetter}</p>
      </div>
    </div>
  );
};
