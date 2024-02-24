import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage, GenerationPage } from "./pages/index.ts";
import { Footer } from "./components/index.ts";
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/generate" element={<GenerationPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
