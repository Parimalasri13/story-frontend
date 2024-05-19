import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const FictionalStoriesImageComponent = () => {
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
      <img src="/fictional.png" alt="Example" className="meme-image" />
      
      {/* "Confess" button */}
      <div className="action-buttons-container">
        <Popup
          trigger={<button className="button-81"> Fictional-Stories </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Stories are the dreams we tell with our eyes open, weaving worlds that exist beyond the limits of our imagination. </div>
              <div className="content">
                {/* Confession textarea */}
                <textarea
                  value={confession}
                  onChange={handleConfessionChange}
                  placeholder="Write your Imaginary-Stories here..."
                  rows={4}
                  cols={50}
                />
              </div>
              <div className="actions">
                <button className="button-81" onClick={handleSubmit}>
                  Upload Fictional-Stories
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default FictionalStoriesImageComponent;
