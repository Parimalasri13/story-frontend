import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const LifeStoriesImageComponent = () => {
  const [confession, setConfession] = useState('');

  const handleConfessionChange = (event) => {
    setConfession(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Confession submitted:', confession);
    // You can handle further submission logic here
  };

  return (
    <div>
      {/* Your meme content here */}
      <img src="/lifestories.png" alt="Example" className="meme-image" />
      
      {/* "Confess" button */}
      <div className="action-buttons-container">
        <Popup
          trigger={<button className="button-81"> Life Stories </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Share Your Life Stories </div>
              <div className="content">
                {/* Life Story textarea */}
                <textarea
                  value={confession}
                  onChange={handleConfessionChange}
                  placeholder="Write your LifeStory here..."
                  rows={4}
                  cols={50}
                />
              </div>
              <div className="actions">
                <button className="button-81" onClick={handleSubmit}>
                  Upload Life-Story
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default LifeStoriesImageComponent;
