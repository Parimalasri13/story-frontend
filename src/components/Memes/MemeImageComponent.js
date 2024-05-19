// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';

// const MemeImageComponent = () => {
//   const [confession, setConfession] = useState('');

//   const handleConfessionChange = (event) => {
//     setConfession(event.target.value);
//   };

//   const handleSubmit = () => {
//     console.log('Confession submitted:', confession);
//   };

//   return (
//     <div>
//       {/* Your meme content here */}
//       <img src="/imagin.png" alt="Example" className="meme-image" />
      
//       {/* "Confess" button */}
//       <div className="confess-button-container">
//         <Popup
//           trigger={<button className="button-81"> Memes </button>}
//           modal
//           nested
//         >
//           {(close) => (
//             <div className="modal">
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//               <div className="header"> Share Your Memes and Make Others to Smile </div>
//               <div className="content">
//                 <textarea
//                   value={confession}
//                   onChange={handleConfessionChange}
//                   placeholder="Write your confession here..."
//                   rows={4}
//                   cols={50}
//                 />
//               </div>
//               <div className="actions">
//                 <button className="button-81" onClick={handleSubmit}>
//                   Upload Meme
//                 </button>
//               </div>
//             </div>
//           )}
//         </Popup>
//       </div>
//     </div>
//   );
// };

// export default MemeImageComponent;
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const MemeImageComponent = () => {
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
      <img src="/memes.png" alt="Example" className="meme-image" />
      
      {/* "Confess" button */}
      <div className="action-buttons-container">
        <Popup
          trigger={<button className="button-81"> Memes </button>}
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

                {/* meme textarea */}
                <textarea
                  value={confession}
                  onChange={handleConfessionChange}
                  placeholder="Write or Upload your Meme here..."
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

export default MemeImageComponent;
