
import React from 'react';
import OtherOptionsImageComponent from './OtherOptionsImageComponent';
import LetsReadComponentOtherOptions from './LetsReadComponentOtherOptions';
import '../style.css';// Import your CSS file

const OtherOptionsPage = () => {
  return (
    <div className="meme-page-container">
      <OtherOptionsImageComponent />
      <LetsReadComponentOtherOptions />
    </div>
  );
};

export default OtherOptionsPage;