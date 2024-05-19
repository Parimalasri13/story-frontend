import React from 'react';
import StoriesImageComponent from './StoriesImageComponent';
import LetsReadComponentStories from './LetsReadComponentStories';
import '../style.css'; // Import your CSS file

const StoriesPage = () => {
  return (
    <div className="meme-page-container">
      <StoriesImageComponent />
      <LetsReadComponentStories/>
    </div>
  );
};

export default StoriesPage;
