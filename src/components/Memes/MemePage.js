

// export default MemePage;
import React from 'react';
import MemeImageComponent from './MemeImageComponent';
import LetsReadComponentMemes from './LetsReadComponentMemes';
import '../style.css'; // Import your CSS file

const MemePage = () => {
  return (
    <div className="meme-page-container">
      <MemeImageComponent />
      <LetsReadComponentMemes />
    </div>
  );
};

export default MemePage;
