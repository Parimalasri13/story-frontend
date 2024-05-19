import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const StoriesImageComponent = () => {
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
      <img src="/stories.png" alt="Example" className="story-image" width={500} height={500}/>
      
      {/* "Confess" button */}
      <div className="action-buttons-container">
        <Popup
          trigger={<button className="button-81"> Stories </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Share Your Stories and Make Others Smile and Learn from it</div>
              <div className="content">
                {/* Confession textarea */}
                <textarea
                  value={confession}
                  onChange={handleConfessionChange}
                  placeholder="Write your Stories here..."
                  rows={4}
                  cols={50}
                />
              </div>
              <div className="actions">
                <button className="button-81" onClick={handleSubmit}>
                  Share Your Story
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default StoriesImageComponent;
