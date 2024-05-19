// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
// import './style.css';

// const MemePage = () => {
//   const [confession, setConfession] = useState('');

//   const handleConfessionChange = (event) => {
//     setConfession(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle submission of confession here
//     console.log('Confession submitted:', confession);
//     // You can perform further actions like sending the confession to the server
//   };

//   return (
//     <div>
//       {/* Your meme content here */}
//       <img src="/imagin.png" alt="Example" width={500} height={500}/>
//       {/* Symbol at bottom right */}
//       <Popup
//         trigger={<button className="button-81"> Confess </button>}
//         modal
//         nested
//       >
//         {(close) => (
//           <div className="modal">
//             <button className="close" onClick={close}>
//               &times;
//             </button>
//             <div className="header"> Confess Your Secret </div>
//             <div className="content">
//               <textarea
//                 value={confession}
//                 onChange={handleConfessionChange}
//                 placeholder="Write your confession here..."
//                 rows={4}
//                 cols={50}
//               />
//             </div>
//             <div className="actions">
//               <button className="button" onClick={handleSubmit}>
//                 Submit Confession
//               </button>
//             </div>
//           </div>
//         )}
//       </Popup>
//     </div>
//   );
// };

// export default MemePage;
// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
// import './style.css';

// const MemePage = () => {
//   const [confession, setConfession] = useState('');

//   const handleConfessionChange = (event) => {
//     setConfession(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle submission of confession here
//     console.log('Confession submitted:', confession);
//     // You can perform further actions like sending the confession to the server
//   };

//   return (
//     <div>
//       {/* Your meme content here */}
//       <img src="/imagin.png" alt="Example" width={500} height={500}/>
      
//       {/* "Confess" button below the image */}
//       <div className="button-container">
//         <Popup
//           trigger={<button className="button-81"> Confess </button>}
//           modal
//           nested
//         >
//           {(close) => (
//             <div className="modal">
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//               <div className="header"> Confess Your Secret </div>
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
//                   Submit Confession
//                 </button>
//               </div>
//             </div>
//           )}
//         </Popup>
//       </div>
//     </div>
//   );
// };

// export default MemePage;
// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
// import './style.css';

// const MemePage = () => {
//   const [confession, setConfession] = useState('');

//   const handleConfessionChange = (event) => {
//     setConfession(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle submission of confession here
//     console.log('Confession submitted:', confession);
//     // You can perform further actions like sending the confession to the server
//   };

//   return (
//     <div className="meme-page-container">
//       {/* Your meme content here */}
//       <img src="/imagin.png" alt="Example" className="meme-image" />
      
//       {/* "Confess" button */}
//       <div className="confess-button-container">
//         <Popup
//           trigger={<button className="button-81"> Confess </button>}
//           modal
//           nested
//         >
//           {(close) => (
//             <div className="modal">
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//               <div className="header"> Confess Your Secret </div>
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
//                   Submit Confession
//                 </button>
//               </div>
//             </div>
//           )}
//         </Popup>
//       </div>
//     </div>
//   );
// };

// export default MemePage;
import React from 'react';
import LifeStoriesImageComponent from './LifeStoriesImageComponent';
import LetsReadComponentLifeStories from './LetsReadComponentLifeStories';
import '../style.css';// Import your CSS file

const LifeStoriesPage = () => {
  return (
    <div className="meme-page-container">
      <LifeStoriesImageComponent />
      <LetsReadComponentLifeStories />
    </div>
  );
};

export default LifeStoriesPage;
