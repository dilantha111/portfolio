import React from 'react';
import './App.css';
import AvatarSection from './components/AvatarSection';
import { Blog } from './components/Blog';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="main-wrapper">
      <AvatarSection />
      <ExperienceSection />
      <Blog />
    </div>
  );
}

export default App;
