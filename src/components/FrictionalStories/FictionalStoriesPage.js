import React from 'react';
import FictionalStoriesImageComponent from './FictionalStoriesImageComponent';
import LetsReadComponentfictionalStories from './LetsReadComponentfictionalStories';
import '../style.css';// Import your CSS file

const FictionalStoriesPage = () => {
  return (
    <div className="meme-page-container">
      <FictionalStoriesImageComponent />
      <LetsReadComponentfictionalStories/>
    </div>
  );
};

export default FictionalStoriesPage;
