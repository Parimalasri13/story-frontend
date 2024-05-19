import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const  OtherOptionsImageComponent = () => {
  const [confession, setConfession] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleConfessionChange = (event) => {
    setConfession(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    console.log('Confession submitted:', confession);
    console.log('Selected image:', selectedImage);
    // You can handle image upload logic here
  };

  return (
    <div>
      {/* Your meme content here */}
      <img src="/other.png" alt="Example" className="meme-image" />
      
      {/* "Confess" button */}
      <div className="action-buttons-container">
        <Popup
          trigger={<button className="button-81"> Share </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Share Your Memes and Make Others to Smile </div>
              <div className="content">
                {/* Upload image input */}
                <input type="file" accept="image/*" onChange={handleImageChange} />

                {/* Confession textarea */}
                <textarea
                  value={confession}
                  onChange={handleConfessionChange}
                  placeholder="Its up to you to share.."
                  rows={4}
                  cols={50}
                />
              </div>
              <div className="actions">
                <button className="button-81" onClick={handleSubmit}>
                  Upload Meme
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default OtherOptionsImageComponent;
